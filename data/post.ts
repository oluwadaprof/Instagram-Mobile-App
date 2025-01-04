import { USERS } from "./users";

const images = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
];

export const postFoooterIcons = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/?size=100&id=87&format=png&color=ffffff",
    likedImageUrl:
      "https://img.icons8.com/?size=100&id=19411&format=png&color=000000",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/?size=100&id=143&format=png&color=ffffff",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/?size=100&id=2837&format=png&color=ffffff",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/?size=100&id=43571&format=png&color=ffffff",
  },
];

export const POSTS = [
  {
    imageurl: images[0],
    user: USERS[0].user,
    likes: 7870,
    caption:
      "Train Ride to Hogwarts. 🧑‍💻🙏 The journey was magical and full of surprises!",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqazaman",
        comment: "Wow! This build looks fire. Super excited about it",
      },
      {
        user: "johndoe123",
        comment: "This is amazing! Can’t wait to see more updates.",
      },
      {
        user: "janedoe456",
        comment: "Incredible work! Love the details in this build.",
      },
    ],
  },
  {
    imageurl: images[1],
    user: USERS[1].user,
    likes: 5438,
    caption:
      "Exploring the mountains! 🏔️ The views are breathtaking and worth every step!",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "adventureseeker",
        comment: "I need to go here!",
      },
      {
        user: "naturefan",
        comment: "Stunning view! Nature is the best.",
      },
    ],
  },
  {
    imageurl: images[2],
    user: USERS[2].user,
    likes: 3230,
    caption: "Beach day vibes! 🌊 Soaking up the sun and enjoying the waves!",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "beachbum",
        comment: "This looks so relaxing!",
      },
      {
        user: "sunnydays",
        comment: "I love the beach!",
      },
      {
        user: "oceanlover",
        comment: "Can’t wait for summer!",
      },
    ],
  },
  {
    imageurl: images[3],
    user: USERS[3].user,
    likes: 4521,
    caption:
      "City lights at night. 🌆 The energy of the city is truly captivating!",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: "cityslicker",
        comment: "The city looks alive at night!",
      },
    ],
  },
  {
    imageurl: images[4],
    user: USERS[4].user,
    likes: 6000,
    caption:
      "Delicious food from my favorite restaurant! 🍽️ Every bite is a burst of flavor and joy!",
    profile_picture: USERS[4].image,
    comments: [
      {
        user: "foodie123",
        comment: "Yum! What did you order?",
      },
      {
        user: "gourmetlover",
        comment: "Looks delicious! I need to try this place.",
      },
      {
        user: "chefmaster",
        comment: "Food goals! 😍",
      },
    ],
  },
  {
    imageurl: images[2],
    user: USERS[5].user,
    likes: 7200,
    caption:
      "A beautiful sunset. 🌅 Nature’s artwork is always a sight to behold!",
    profile_picture: USERS[5].image,
    comments: [
        {
          user: "foodie123",
          comment: "Yum! What did you order?",
        },
        {
          user: "gourmetlover",
          comment: "Looks delicious! I need to try this place.",
        },
        {
          user: "chefmaster",
          comment: "Food goals! 😍",
        },
      ],
  },
];
