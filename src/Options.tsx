import React from "react";

const options = [
    {
        label: "Group 1",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
          { value: "option5", label: "Option 5" },

          {
            label: "Group 3",
            options: [
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
              { value: "option4", label: "Option 4" },
              { value: "option5", label: "Option 5" },
            ]
          }

        ],
      },

      {
        label: "Group 2",
        options: [
          { value: "option3", label: "Option 3" },
          {
            value: "option4",
            label: "Option 4",
            subOptions: [
              { value: "suboption1", label: "Suboption 1" },
              { value: "suboption2", label: "Suboption 2" },
            ],
          },
        ],
      },
]

export default options;