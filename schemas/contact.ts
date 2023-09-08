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
    ]
}