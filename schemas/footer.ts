// schemas/footer.ts
export default {
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        {
            name: "BackgroundImage",
            title: "Background Image",
            type: "image",
        },
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "text",
            title: "Text",
            type: "text",
        },
        {
            name: "book",
            title: "Book",
            type: "string"
        },
        {
            name: "media",
            title: "Media",
            type: "array",
            of: [
                {
                    name: "mediaItems",
                    title: "Media Items",
                    type: "object",
                    fields: [
                        {
                            name: "mediaName",
                            title: "Media Name",
                            type: "string",
                        },
                        {
                            name: "mediaImage",
                            title: "Media Image",
                            type: "image"
                        }
                    ]
                }
            ]
        }
    ]
}