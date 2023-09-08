// schemas/excursions.ts
export default {
    name: 'excursions',
    type: "document",
    title: 'Excurions',
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

      // Excursions Section
      {
        name: "excrusions",
        title: "Excursions",
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
            name: 'addTown',
            title: 'Add City, Town or Country',
            type: 'array',
            of: [
             {
              name: "CityTownState",
              title: "City - State - Town",
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
                  name: "reservation",
                  title: "Reservation Button",
                  type: "object",
                  fields: [
                    {
                      name: "reservationText",
                      title: "Reservation Text",
                      type: "string",                     
                    },
                    {
                      name: "reservationUrl",
                      title: "Reservation Url",
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