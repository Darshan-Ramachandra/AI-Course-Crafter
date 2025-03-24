import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

const SelectOption = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldname, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldname]: value,
    }));
  };
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label htmlFor="" className="text-xm">
            {" "}
            🎓Difficulty level
          </label>
          <Select
            onValueChange={(value) =>
              handleInputChange("level", value)
            }
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner"> Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="" className="text-xm">
            🕛 Course Duration
          </label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">
                More Than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="" className="text-xm">
            ▶️Video
          </label>
          <Select
            onValueChange={(value) => handleInputChange("displayVideo", value)}
            defaultValue={userCourseInput?.displayVideo}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              {/* <SelectItem value="No">No</SelectItem> */}
            </SelectContent>
          </Select>
          </div>

<div>
  <label>No of Chapters</label>
  <Input
    onChange={(e) => {
      let value = Number(e.target.value);
      if (value < 0) value = 0;
      if (value > 10) {
        alert("Max limit is 10 chapters!"); // Small alert popup
        value = 10;
      }
      handleInputChange("noOfChapter", value);
    }}
    defaultValue={userCourseInput?.noOfChapter}
    type="number"
    min="0"
    max="10"
  />
</div>

      </div>
    </div>
  );
};

export default SelectOption;
