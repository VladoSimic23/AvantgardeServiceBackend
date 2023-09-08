// schemas/home.ts
export default {
    name: 'homepage',
    type: "document",
    title: 'Homepage',
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
      // hero section end

      // Experience
      {
        name: 'experience',
        type: 'object',
        title: 'Experience Section',
        fields: [
            {
                name: "ImageThenText",
                title: "Image Then Text",
                type: "array",
                of: [
                  {
                    type: "object",
                    name: "Image Then Text",
                    fields: [
                      {type: "image", name: "Experience_Image"},
                      {type: "string", name: "Experience_Heading" },
                      {type: "text", name: "Experience_Text" }
                    ]
                  }       
                ]
               
            },
            {
                name: "TextThenImage",
                title: "Text Then Image",
                type: "array",
                of: [
                  {
                    type: "object",
                    name: "Text Then Image",
                    fields: [
                        {type: "string", name: "Experience_Heading" },
                        {type: "image", name: "Experience_Image"},
                        {type: "text", name: "Experience_Text" }
                    ]
                  }       
                ]
               
            }
        ]
      },

      /// Get To Know Us Section
      {
        name: 'getToKnowUs',
        type: 'object',
        title: 'Get To Know Us Section',
        fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string"
            },
            {
              name: "text",
              title: "Text",
              type: "text"
            },
            {
              name: "offers",
              title: "Offers",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "Our Offers",
                  fields: [
                      {type: "image", name: "Image"},
                      {type: "string", name: "Heading" },
                      {type: "text", name: "Text" },
                      {type: "object", 
                      name: "Button_Link", 
                      fields: [
                              {name: "ButtonLink",
                               title: "Url",
                               type: "string"
                              },
                              {name: "ButtonText",
                               title: "Butoon_Text",
                               type: "string"
                              }
                              ]
                      }
                  ]
                }       
              ]
            },
        ]
      },

      // Testimonials Section
         {
              name: "testimonials",
              title: "Testimonials",
              type: "object",
              fields: [
                {
                  name: "heading",
                  type: "string",
                  title: "Heading",
                },
                {
                  name: "text",
                  type: "text",
                  title: "Text",
                },
                {
                  name: "reviews",
                  title: "Reviews",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      name: "Our Reviews",
                      fields: [
                        {
                          name: "text",
                          title: "Text",
                          type: "text"
                        },
                        {
                          name: "country",
                          title: "Country",
                          type: "image"
                        },
                        {
                          name: 'rating',
                          title: 'Rating',
                          type: 'object',
                          fields: [
                            {
                              name: 'value',
                              title: 'Vrijednost od 1 - 10',
                              type: 'number',
                              validation: (Rule: any) => Rule.required().min(1).max(10),
                            }
                          ]
                        },
                        {
                          name: "personName",
                          title: "Person Name",
                          type: "string",                         
                        },
                        {
                          name: "source",
                          title: "Source",
                          type: "string",                         
                        }
                      ]
                    }
                  ]
                }
              ]
            }
    ]
  }