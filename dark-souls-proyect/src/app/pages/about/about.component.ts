import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  articles = [
    {
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48d5136c-ae63-4bec-8478-ee02cfbaa7ee/dc5rpvv-4415b5c3-4d22-4ed5-b332-e5d11083d010.jpg/v1/fill/w_1024,h_1450,q_75,strp/artorias_the_abysswalker_by_ron_faure_dc5rpvv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzQ4ZDUxMzZjLWFlNjMtNGJlYy04NDc4LWVlMDJjZmJhYTdlZVwvZGM1cnB2di00NDE1YjVjMy00ZDIyLTRlZDUtYjMzMi1lNWQxMTA4M2QwMTAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZCvzBVSv10-LjxTiw24Qxx3woc8A9217umLSkIb3DgM',
      paragraphs: [
        'Welcome to the Dark Souls 3 Boss Guide, a community-driven website dedicated to providing valuable information and strategies for defeating all the bosses in the game. Our goal is to help players overcome the challenges posed by these formidable foes and conquer the game. Whether you\'re a seasoned veteran or a new player, our comprehensive boss guides and tips will assist you in your journey.',
        'Explore our collection of boss profiles, including their locations, difficulty ratings, recommended levels, weaknesses, and special requirements. Each boss page contains in-depth strategies and tactics to give you the best chance of emerging victorious.',
        'Join our vibrant community of Dark Souls 3 enthusiasts, where you can share your experiences, discuss strategies, and seek advice from fellow players. Together, we can conquer every boss and triumph over the darkness that engulfs the world of Dark Souls 3.',
        'Prepare yourself, brave warrior, for the ultimate challenge in Dark Souls 3. Face the relentless bosses, uncover hidden secrets, and emerge as a true champion in this unforgiving world.'
      ]
    },
    {
      imageUrl: 'https://pbs.twimg.com/media/FE5FmgCX0AIcVCi.jpg:large',
      paragraphs: [
        'The Dark Souls 3 Boss Guide was created by a group of passionate Dark Souls players who recognized the need for a centralized resource to help others navigate the challenging world of Dark Souls 3. With their extensive knowledge and experience, they set out to compile detailed information, tips, and strategies for every boss encounter in the game.',
        'Our mission is to empower players by providing them with the tools and knowledge they need to overcome the toughest adversaries. We aim to create a supportive community where players can learn from each other, share their successes and failures, and grow as warriors.',
        'Through our comprehensive boss guides, we strive to demystify the bosses and break down their patterns, attacks, and weaknesses. By understanding the intricacies of each encounter, players can devise effective strategies and hone their skills to emerge victorious.'
      ]
    },
    {
      imageUrl: 'https://pbs.twimg.com/media/DnUc_nkXcAA8pyj.jpg:large',
      paragraphs: [
        'Stay connected with us and our active community through our social media channels. We promote our website, boss guides, and community events on various platforms to reach a wider audience and provide a space for Dark Souls 3 players to come together.',
        'Follow us on Twitter, Facebook, and Instagram to get the latest updates, news, and tips. Engage with other players, share your achievements, and participate in discussions about the game. Our social media channels are also a great way to stay informed about any upcoming community events, such as tournaments or livestreams.',
        'Join our growing community and become part of the Dark Souls 3 Boss Guide network. Together, we can support each other, exchange knowledge, and celebrate our victories in the world of Dark Souls 3.'
      ]
    }
  ];
}
