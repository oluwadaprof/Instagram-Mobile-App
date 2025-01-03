import { USERS } from "./users";


const images = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
    'https://picsum.photos/200/300?random=4',
    'https://picsum.photos/200/300?random=5',
];

export const POSTS = [
    {
        imageurl: images[0], 
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts. 🧑‍💻🙏',
        profile_picture: USERS[0].image,
        contacts: [
            {
                user: 'theqazaman',
                comment: 'Wow! This build looks fire. Super excited about it'
            },
            {
                user: 'johndoe123',
                comment: 'This is amazing! Can’t wait to see more updates.'
            },
            {
                user: 'janedoe456',
                comment: 'Incredible work! Love the details in this build.'
            }
        ]
    },
    {
        imageurl: images[1],
        user: USERS[1].user,
        likes: 5000,
        caption: 'Exploring the mountains! 🏔️',
        profile_picture: USERS[1].image,
        contacts: [
            {
                user: 'mountainlover',
                comment: 'Looks breathtaking! Where is this?'
            },
            {
                user: 'adventureseeker',
                comment: 'I need to go here!'
            },
            {
                user: 'naturefan',
                comment: 'Stunning view! Nature is the best.'
            }
        ]
    },
    {
        imageurl:images[2], 
        user: USERS[2].user,
        likes: 3200,
        caption: 'Beach day vibes! 🌊',
        profile_picture: USERS[2].image,
        contacts: [
            {
                user: 'beachbum',
                comment: 'This looks so relaxing!'
            },
            {
                user: 'sunnydays',
                comment: 'I love the beach!'
            },
            {
                user: 'oceanlover',
                comment: 'Can’t wait for summer!'
            }
        ]
    },
    {
        imageurl: images[3], 
        user: USERS[3].user,
        likes: 4500,
        caption: 'City lights at night. 🌆',
        profile_picture: USERS[3].image,
        contacts: [
            {
                user: 'cityslicker',
                comment: 'The city looks alive at night!'
            },
            {
                user: 'nightowl',
                comment: 'Love the nightlife!'
            },
            {
                user: 'urbanexplorer',
                comment: 'Such a vibrant city!'
            }
        ]
    },
    {
        imageurl: images[4], 
        user: USERS[4].user,
        likes: 6000,
        caption: 'Delicious food from my favorite restaurant! 🍽️',
        profile_picture: USERS[4].image,
        contacts: [
            {
                user: 'foodie123',
                comment: 'Yum! What did you order?'
            },
            {
                user: 'gourmetlover',
                comment: 'Looks delicious! I need to try this place.'
            },
            {
                user: 'chefmaster',
                comment: 'Food goals! 😍'
            }
        ]
    },
    {
        imageurl: images[2], 
        user: USERS[5].user,
        likes: 7200,
        caption: 'A beautiful sunset. 🌅',
        profile_picture: USERS[5].image,
        contacts: [
            {
                user: 'sunsetchaser',
                comment: 'Absolutely stunning!'
            },
            {
                user: 'photographyfan',
                comment: 'What a perfect shot!'
            },
            {
                user: 'naturephotographer',
                comment: 'This is breathtaking!'
            }
        ]
    } 
]

