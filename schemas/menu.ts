// schemas/menu.js
export default {
    name: 'menu',
    type: "document",
    title: 'Menu',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        image: "image"
      },
      {
        name: "image",
        title: "Logo",
        type: "image",
        options: {
            hotspot: true // Enable hotspot to crop/position the image
          }
      },
      {
        name: "page_links",
        title: "Page Links",
        type: "array",
        of: [
          {
            type: "object",
            name: "Page Link",
            fields: [
              { type: "string", name: "Link_Name" },
              { type: "string", name: "Url" }
            ]
          }       
        ]       
      },
      {
        name: "reservationBtn",
        title: "Reservation Button",
        type: "object",
        fields: [
          {
            name: "buttonText",
            title: "Button Text",
            type: "string",
          },
          {
            name: "buttonUrl",
            title: "Button Url",
            type: "url"
          }
        ]
      }
    ]
  }