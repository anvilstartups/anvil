import React from "react";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";

const section1 = {
  title: "The Boiler",
  subheading: "Lorem ispum blah blah blah",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus auctor vestibulum. Ut efficitur scelerisque sagittis. Aliquam dignissim fringilla laoreet. Sed auctor erat id erat fermentum eleifend. Nam arcu magna, egestas nec sem a, ultrices fringilla augue. Praesent ac feugiat ex, at vulputate diam. Maecenas vel hendrerit lorem, ac faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dolor imperdiet, blandit ex in, congue risus.",
    "Ut molestie volutpat consectetur. Pellentesque et orci sem. Morbi tempor suscipit venenatis. Morbi luctus nulla id est luctus, vel efficitur augue ultrices. Maecenas semper posuere semper. Aenean sagittis at libero non elementum. Praesent quis interdum nisi. Suspendisse eget nisl sed augue pulvinar sagittis ac eu nunc. Nunc pretium rutrum vehicula. Aliquam erat volutpat. Duis et tincidunt mi. Donec quis hendrerit orci. Etiam congue porttitor nisi nec cursus. Ut molestie volutpat consectetur. Pellentesque et orci sem. Morbi tempor suscipit venenatis. Morbi luctus nulla id est luctus, vel efficitur augue ultrices. Maecenas semper posuere semper. Aenean sagittis at libero non elementum. Praesent quis interdum nisi. Suspendisse eget nisl sed augue pulvinar sagittis ac eu nunc. Nunc pretium rutrum vehicula. Aliquam erat volutpat. Duis et tincidunt mi. Donec quis hendrerit orci. Etiam congue porttitor nisi nec cursus. Ut molestie volutpat consectetur. Pellentesque et orci sem. Morbi tempor suscipit venenatis. Morbi luctus nulla id est luctus, vel efficitur augue ultrices. Maecenas semper posuere semper. Aenean sagittis at libero non elementum. Praesent quis interdum nisi. Suspendisse eget nisl sed augue pulvinar sagittis ac eu nunc. Nunc pretium rutrum vehicula. Aliquam erat volutpat. Duis et tincidunt mi. Donec quis hendrerit orci. Etiam congue porttitor nisi nec cursus."
  ]
};

const section2 = {
  title: "Section 2",
  subheading: "Lorem ispum blah blah blah",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus auctor vestibulum. Ut efficitur scelerisque sagittis. Aliquam dignissim fringilla laoreet. Sed auctor erat id erat fermentum eleifend. Nam arcu magna, egestas nec sem a, ultrices fringilla augue. Praesent ac feugiat ex, at vulputate diam. Maecenas vel hendrerit lorem, ac faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dolor imperdiet, blandit ex in, congue risus."
  ]
};

const EventsPage = () => (
  <Layout>
    <TitleSection title="Events" theme="blue" />
    <TextSection {...section1} />
    <TextSection {...section2} />
  </Layout>
);

export default EventsPage;