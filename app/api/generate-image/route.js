import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("🔍 Received prompt:", prompt);

    if (!prompt) {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    const replicateKey = process.env.NEXT_PUBLIC_REPLICATE_API_KEY;

    if (!replicateKey) {
      console.error("🚨 Missing API Key in environment variables!");
      return NextResponse.json({ error: "Server error: Missing API Key" }, { status: 500 });
    }

    console.log("🔑 API Key being used:", replicateKey);

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": `Token ${replicateKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Include model details and parameters here
        version: "your_model_version", // Specify your model version
        input: { prompt: prompt }, // Adjust this based on the model's input requirements
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("🚨 API Error:", errorResponse);
      return NextResponse.json({ error: errorResponse.error || "Failed to generate image" }, { status: response.status });
    }

    const data = await response.json();
    console.log("📷 AI Image Response:", data);

    return NextResponse.json({ imageUrl: data.output_url }, { status: 200 });

  } catch (error) {
    console.error("🚨 AI Image Generation Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
