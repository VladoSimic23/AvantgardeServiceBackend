// schemas/taxi.ts
export default {
    name: 'taxiAndTransfers',
    type: "document",
    title: 'Taxi and Transfers',
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

      /// Transport offers
      {
        name: "transportServices",
        title: "Transport Services",
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
            name: "services",
            title: "Our Transport Services",
            type: "array",
            of: [
              {
                name: "Our Transport Services",
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
                    name: "image",
                    title: "Image",
                    type: "image"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
}