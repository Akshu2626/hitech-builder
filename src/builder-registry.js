"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MyCrausal from "./components/MyCrausal/MyCrausal";
import TestimonialsGrid from "./components/TestimonialsGrid/TestimonialsGrid";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});


Builder.registerComponent(MyCrausal, {
  name: "MyCrausal",
  inputs: [
    {
      name: "crausalData",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          friendlyName: "Image URL",
          required: true,
        },
        {
          name: "title",
          type: "string",
          friendlyName: "Title",
          required: true,
        },
      ],
    },
  ],
});


Builder.registerComponent(TestimonialsGrid, {
  name: 'TestimonialsGrid',
  description: 'A masonry grid layout for displaying testimonials with dynamic loading.',
  inputs: [
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'string',
          required: true,
          defaultValue: 'Great Service!',
        },
        {
          name: 'text',
          type: 'text',
          required: true,
          defaultValue: 'The service was excellent, and the team was professional.',
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          defaultValue: 'John Doe',
        },
        {
          name: 'rating',
          type: 'number',
          required: true,
          defaultValue: 5,
          min: 1,
          max: 5,
        },
        {
          name: 'highlight',
          type: 'boolean',
          defaultValue: false,
        },
      ],

    },
    {
      name: 'loadMoreHandler',
      type: 'function',
      helperText: 'Function to load more testimonials when the "Load More" button is clicked.',
    },
  ],
});


