import guildStackGif from './components/assets/guildstack.gif';
import profilePic from './components/assets/profile.jpg';


export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Jonah Karew.',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 My Name is Jonah Karew.',
                        //Line 2 For Header
                        'Web Developer',
                        //Line 3 For Header
                        'from New Jersey'
    ],
        //Contact Email
        contactEmail:'jonahkarew@gmail.com',
        // Add Your About Text Here
        abouttext: `Hi, I'm Jonah. I'm pretty new to the world of full stack development, but what I lack in experience I make up for in pure determination.`,
        aboutImage:profilePic,
        // aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'FFXIV Guildstack', //Project Title - Add Your Project Title Here
             service:'', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc: guildStackGif,
             //Project URL - Add Your Project Url Here
             url:'https://ffxivguildstack.herokuapp.com/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Two',
                service: 'Website Development',
                imageSrc: "",
                url: ''
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "",
                url: ''
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "",
                url: ''
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/Jonahkarew'},
        ]
    }