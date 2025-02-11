"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MyCrausal from "./components/MyCrausal/MyCrausal";

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


