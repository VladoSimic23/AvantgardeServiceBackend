// schemas/contact.ts
export default {
    name: 'contact',
    type: "document",
    title: 'Contact',
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
      // Contact Details
      {
        name: "ContactDetails",
        type: "object",
        title: "Contact Details",
        fields: [
          {
            name:"location",
            type: "object",
            title: "Location",
            fields: [
              {
                name: "title",
                type: "string",
                title: "Title"
              },
              {
                name: "theLocation",
                type: "string",
                title: "Location"
              }
            ]
          },
          {
            name: "contacts",
            title: "Contacts",
            type: "object",
            fields: [
              {
                name: "title",
                type: "string",
                title: "title"
              },
              {
                name: "phoneNumber",
                type: "string",
                title: "Phone Number"
              },
              {
                name: "email",
                type: "email",
                title: "Email"
              }
            ]
          },
          {
            name: "socialMedia",
            type: "object",
            title: "Social Media",
            fields: [
              {
                name: "title",
                type: "string",
                title: "Title"
              },
              {
                name: "Media",
                type: "array",
                title: "Media",
                of: [
                  {
                    name: "addMedia",
                    type: "object",
                    title: "Add Media",
                    fields: [
                      {
                        name: "mediaImage",
                        type: "image",
                        title: "Media Image"
                      },
                      {
                        name: "mediaUrl",
                        type: "url",
                        title: "Media Url"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
}