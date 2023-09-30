// schemas/accommodation.ts
export default {
    name: 'accommodation',
    type: "document",
    title: 'Accommodation',
    fields: [
        ///hero section
      {
        name: 'hero',
        type: 'object',
        title: 'Hero Section',
        fields: [
            {
                name: "heroHeading",
                title: "Hero Heading",
                type: "string"
            },
            {
                name: "heroText",
                title: "Hero Text",
                type: "text"
            },
            {
                name: "HeroBgImage",
                title: "Hero Background Image",
                type: "image"
            },
            {
                name: 'heroButton',
                title: 'Hero Button',
                type: 'object',
                fields: [
                  {
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'Button URL',
                    type: 'string',
                  },
                ],
              },
        ]
      },
      //Accomodation
      {
        name: "accommodationSection",
        title: "Accomodation Section",
        type: "object",
        fields: [
          {
            name: "heading",
            title: "Heading",
            type: "string",
          },
          {
            name: "text",
            title: "Text",
            type: "text"
          },
          {
            name: 'addHouse',
            title: 'Add House',
            type: 'array',
            of: [
             {
              name: "house",
              title: "House",
              type: "object",
              fields: [
                {
                  name: "headingWithHouseLink",
                  title: "Heading With House Link",
                  type: "object",
                  fields: [
                    {
                      name: "heading",
                      title: "Heading",
                      type: "string"
                    },
                    {
                      name: "houseUrl",
                      title: "House Url",
                      type: "string"
                    }
                  ]
                },
                {
                  name: "text",
                  title: "Text",
                  type: "text"
                },
                {
                  name: "images",
                  title: "Images",
                  type: "array",
                  of: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image"
                    }
                  ]
                },
                {
                  name: "videos",
                  title: "Videos",
                  type: "array",
                  of: [
                    {
                      name: "video",
                      title: "Video",
                      type: "url"
                    }
                  ]
                }
              ]
             }
      
            ],
          },
        ]
      }
    ]
}