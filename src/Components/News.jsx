import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Yahoo Sports Staff",
        "title": "2024 NFL schedule release: Everything you need to know about this season's slate - Yahoo Sports",
        "description": "Here's what you need to know about the 2024 NFL schedule after Wednesday night's announcement.",
        "url": "https://sports.yahoo.com/live/2024-nfl-schedule-release-everything-you-need-to-know-about-this-seasons-slate-222736036.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EpbdRU2ZHuiIDgygXlc5Kg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-05/1c0c62f0-132b-11ef-bdf7-d579add55a23",
        "publishedAt": "2024-05-16T04:30:00Z",
        "content": "The NFL's full regular-season schedule was announced Wednesday and it got the usual over-the-top coverage from broadcasters, including the league's network and ESPN2. Here's everything you need to kn… [+5283 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "France Declares Emergency In New Caledonia As Protests Rage, 4 Dead - NDTV",
        "description": "Armed forces were protecting New Caledonia's two airports and port after a third night of violent riots that have killed four people, the Pacific Island's top French official said on Thursday morning.",
        "url": "https://www.ndtv.com/world-news/200-arrested-roads-barricaded-in-frances-new-caledonia-as-riots-continue-5674085",
        "urlToImage": "https://c.ndtvimg.com/2024-05/i05g72e8_france-riots_625x300_16_May_24.jpeg?ver-20240506.08",
        "publishedAt": "2024-05-16T04:02:48Z",
        "content": "Sydney: Armed forces were protecting New Caledonia's two airports and port after a third night of violent riots that have killed four people, the Pacific Island's top French official said on Thursday… [+3360 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SciTechDaily"
        },
        "author": null,
        "title": "Super Fluffy “Cotton Candy” Exoplanet Discovery Shocks Scientists – “We Cannot Explain How This Planet Formed” - SciTechDaily",
        "description": "Astronomers have discovered an enormous, low-density planet named WASP-193b, which is 50% larger than Jupiter but has a cotton candy-like density. This finding challenges current planetary formation theories, as scientists cannot explain how such a planet cou…",
        "url": "https://scitechdaily.com/super-fluffy-cotton-candy-exoplanet-discovery-shocks-scientists-we-cannot-explain-how-this-planet-formed/",
        "urlToImage": "https://scitechdaily.com/images/Fluffy-Exoplanet-Concept.jpg",
        "publishedAt": "2024-05-16T02:49:21Z",
        "content": "Astronomers have discovered an enormous, low-density planet named WASP-193b, which is 50% larger than Jupiter but has a cotton candy-like density. This finding challenges existing planet formation th… [+7998 chars]"
        },
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "JUSTIN SPIKE",
        "title": "Who is Robert Fico? Slovakia Prime Minister shot multiple times - The Associated Press",
        "description": "Prime Minister Robert Fico returned to power in Slovakia last year. Having previously served twice as prime minister, from 2006 to 2010 and again from 2012 to 2018, the 59-year-old's third term made him the longest-serving head of government in Slovakia’s his…",
        "url": "https://apnews.com/article/robert-fico-slovakia-shot-prime-minister-751051f2a36391919790c62d664a5e6d",
        "urlToImage": "https://dims.apnews.com/dims4/default/cfab692/2147483647/strip/true/crop/6500x3656+0+338/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F74%2F37%2F2e6597a2dd57aa68f56285b19a37%2Ff90d619f1a5e46f0a615681a3beb206c",
        "publishedAt": "2024-05-16T01:56:00Z",
        "content": "BUDAPEST, Hungary (AP) Slovakian Prime Minister Robert Fico was shot multiple times after a political event Wednesday afternoon, an episode of violence that punctuated his decades-long career in poli… [+2613 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": null,
        "title": "Caitlin Clark's Fever debut most-watched WNBA game since 2001 - ESPN",
        "description": "Caitlin Clark's debut for the Fever was the most-watched WNBA game since 2001 and the most-watched ever on ESPN, drawing 2.1 million viewers across all platforms on Tuesday night.",
        "url": "https://www.espn.com/wnba/story/_/id/40154904/caitlin-clark-fever-debut-most-watched-wnba-game-2001",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0515%2Fr1333087_1296x729_16%2D9.jpg",
        "publishedAt": "2024-05-16T01:36:00Z",
        "content": "May 15, 2024, 09:36 PM ET\r\nCaitlin Clark's debut for the Indiana Fever drew 2.1 million viewers across all platforms on Tuesday night, making it the most-watched WNBA game on ESPN.\r\nViewership peaked… [+758 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hollywood Reporter"
        },
        "author": "Alex Weprin",
        "title": "Inside YouTube’s Brandcast: Billie Eilish, Roger Goodell, AI Talk and Lots of Creators - Hollywood Reporter",
        "description": "YouTube held its annual Brandcast upfront event at Lincoln Center's David Geffen Hall on Wednesday.",
        "url": "http://www.hollywoodreporter.com/business/digital/inside-youtube-brandcast-billie-eilish-roger-goodell-ai-1235900630/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/Neal-Mohan-publicity-H-2024.jpg?w=1024",
        "publishedAt": "2024-05-16T01:27:00Z",
        "content": "If there has been a consistent message from YouTube over the past couple of years, it has been built around its vast ecosystem of creators. More recently, that has been joined by artificial intellige… [+2924 chars]"
        },
        {
        "source": {
        "id": "politico",
        "name": "Politico"
        },
        "author": "POLITICO",
        "title": "Trump asks New York's high court to intervene in fight over gag order in hush money trial - POLITICO",
        "description": null,
        "url": "https://www.politico.com/news/2024/05/15/donald-trump-gag-order-hush-money-trial-appeal-00158277",
        "urlToImage": null,
        "publishedAt": "2024-05-16T00:29:22Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "PBS"
        },
        "author": "William Brangham, Sam Weber",
        "title": "Why scientists are concerned about the latest transmission of bird flu to cows - PBS NewsHour",
        "description": "The outbreak of bird flu in the U.S. has alarmed researchers and prompted new efforts to track the virus that's already killed millions of birds from Europe to Antarctica. As H5N1 continues to jump into mammals, many scientists are concerned that we're not wa…",
        "url": "https://www.pbs.org/newshour/show/why-scientists-are-concerned-about-the-latest-transmission-of-bird-flu-to-cows",
        "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2024/05/birdflu-1024x683.jpg",
        "publishedAt": "2024-05-16T00:25:10Z",
        "content": "William Brangham:\r\nIn fact, unlike cows, this bird flu has been deadly to the nearly two dozen other mammal species that have been infected in this U.S., from a polar bear in Alaska, to a mountain li… [+821 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PBS"
        },
        "author": "Nick Schifrin, Dan Sagalyn, Zeba Warsi, Ethan Dodd",
        "title": "Israeli defense minister publicly criticizes Netanyahu's Gaza strategy - PBS NewsHour",
        "description": "Israeli Prime Minister Benjamin Netanyahu pushed back against criticism of his Gaza strategy from within his own government. Israel's defense minister accused Netanyahu of \"indecision\" and leading Israel down a \"dangerous course.\" The public infighting comes …",
        "url": "https://www.pbs.org/newshour/show/israeli-defense-minister-publicly-criticizes-netanyahus-gaza-strategy",
        "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2024/05/war-2-1024x683.jpg",
        "publishedAt": "2024-05-16T00:22:04Z",
        "content": "Nick Schifrin:\r\nFor months, the Israeli military has been pushing Benjamin Netanyahu to look beyond individual military operations and lay out a political plan for the future of Gaza, lay out the goa… [+459 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Samantha Delouya",
        "title": "Warren Buffett finally reveals the mysterious company he’s invested billions of dollars in - CNN",
        "description": "The mystery is over: Warren Buffett’s Berkshire Hathaway disclosed a major stake in the insurance company Chubb, finally revealing the investment he has kept under wraps since last year.",
        "url": "https://www.cnn.com/2024/05/15/business/warren-buffett-berkshire-hathaway-chubb-stake/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2019-05-03t190952z-486105568-rc153d4f2ff0-rtrmadp-3-berkshire-buffett-brooks.JPG?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-05-16T00:11:00Z",
        "content": "The mystery is over: Warren Buffetts Berkshire Hathaway disclosed a major stake in the insurance company Chubb, finally revealing the investment he has kept under wraps since last year.\r\nBerkshire re… [+1606 chars]"
        },
       {
       "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": "Laura Curtis, Alexandre Tanzi",
        "title": "US CPI Data Subset Was Inadvertently Posted 30 Minutes Early - Bloomberg",
        "description": "The US Bureau of Labor Statistics inadvertently published Consumer Price Index data 30 minutes early on Wednesday, raising fresh questions about how the agency releases some of the world’s most sensitive economic information.",
        "url": "https://www.bloomberg.com/news/articles/2024-05-16/us-bls-says-april-cpi-data-inadvertently-posted-30-min-early",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_Syr8PfHpgE/v0/1200x800.jpg",
        "publishedAt": "2024-05-16T00:07:00Z",
        "content": "The US Bureau of Labor Statistics inadvertently published Consumer Price Index data 30 minutes early on Wednesday, raising fresh questions about how the agency releases some of the worlds most sensit… [+249 chars]"
        },
       {
       "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Melissa Quinn, Ed O'Keefe",
        "title": "Biden and Trump agree to presidential debates on June 27 and Sept. 10 - CBS News",
        "description": "President Biden and former President Donald Trump will go head-to-head in presidential debates on June 27 and Sept. 10, their campaigns said Wednesday.",
        "url": "https://www.cbsnews.com/news/biden-willing-debate-trump-twice/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/04/29/03ee0b33-5006-41e5-a16d-8361a380d9ec/thumbnail/1200x630/a7f5149c550d4576f38656d90909b2f6/cbsn-fusion-economy-top-of-mind-for-voters-in-tight-biden-trump-swing-state-races-thumbnail.jpg?v=fc8d024e10db3fe720fa4908dcd79bea",
        "publishedAt": "2024-05-15T23:42:47Z",
        "content": "Washington — President Biden and former President Donald Trump will go head-to-head in presidential debates on June 27 and Sept. 10, with the two White House hopefuls accepting invitations from CNN a… [+9638 chars]"
        },
       {
       "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Sarah Rumpf-Whitten",
        "title": "Police on UC Irvine campus after anti-Israel agitators swarm buildings; students told to 'shelter in place' - Fox News",
        "description": "Students were told to \"leave area\" after hundreds of anti-Israel agitators descended onto the campus of UC Irvine on Wednesday, barricading campus buildings.",
        "url": "https://www.foxnews.com/us/police-uc-irvine-campus-after-anti-israel-agitators-swarm-buildings-students-told-shelter-place",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/A1.jpg",
        "publishedAt": "2024-05-15T23:41:36Z",
        "content": "After hundreds of anti-Israel protesters swarmed campus buildings and set up barricades at the University of California, Irvine, local law enforcement agencies responded and students were ordered to … [+4263 chars]"
        },
       {
       "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "",
        "title": "Adam Sandler to reprise role as 'Happy Gilmore' nearly 30 years later as Netflix confirms sequel in works - CBS Sports",
        "description": "Both Sandler and Christopher McDonald are set to return for the second film",
        "url": "https://www.cbssports.com/golf/news/adam-sandler-to-reprise-role-as-happy-gilmore-nearly-30-years-later-as-netflix-confirms-sequel-in-works/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/05/15/c3d78ad9-a2ca-4c85-8876-a36eccbd57dd/thumbnail/1200x675/db7c9107e9e209dce6e9c1d8b4d55106/happy-gilmore-getty.jpg",
        "publishedAt": "2024-05-15T23:31:00Z",
        "content": "Good news, sports movie fans. A sequel to the classic 1996 golf comedy \"Happy Gilmore\" is officially in the works, as confirmed by Netflix on Wednesday.\r\nThe original movie centers around Adam Sandle… [+1171 chars]"
        },
       {
       "source": {
        "id": null,
        "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Walmart Stock: Dow Retail Giant And Nation's Largest Grocer Has Earnings Due - Investor's Business Daily",
        "description": "Are consumers still spending? Walmart results are a key gauge.",
        "url": "https://www.investors.com/news/walmart-stock-buy-point-earnings/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2019/01/Stock-Walmart-09-company.jpg",
        "publishedAt": "2024-05-15T23:07:00Z",
        "content": "Walmart (WMT) prepares to disclose earnings for its fiscal first quarter early Thursday. Walmart stock was little changed near a buy point Wednesday.\r\nXThe Walmart earnings report comes after Home De… [+2120 chars]"
        },
       {
       "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Cavaliers @ Celtics Game 5 | #NBAPlayoffs presented by Google Pixel on TNT Live Scoreboard - NBA",
        "description": "Tune-in to TNT for tonight's #NBAPlayoffs presented by Google Pixel double-header! CLE/BOS: 7:00 PM ETDAL/OKC: 9:30 PM ETNever miss a moment with the latest ...",
        "url": "https://www.youtube.com/watch?v=K8KOEgqVZmU",
        "urlToImage": "https://i.ytimg.com/vi/K8KOEgqVZmU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFYgXShlMA8=&rs=AOn4CLATvW_pxQGTZB5SbYKMoRK2HnYsXA",
        "publishedAt": "2024-05-15T23:00:56Z",
        "content": null
        },
       {
       "source": {
        "id": null,
        "name": "KGO-TV"
        },
        "author": null,
        "title": "Pro-Palestinian protesters take over condemned hall at UC Berkeley, police say - KGO-TV",
        "description": "Pro-Palestinian protesters took over Anna Head Alumnae Hall at UC Berkeley on Wednesday afternoon, police say.",
        "url": "https://abc7news.com/post/pro-palestinian-protesters-at-uc-berkeley-take-over-anna-head-alumnae-hall-near-peoples-park/14821550/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/14821644_051524-kgo-cal-protest-hall-img.jpg?w=1600",
        "publishedAt": "2024-05-15T22:52:30Z",
        "content": "BERKELEY, Calif. (KGO) -- Pro-Palestinian protesters took over Anna Head Alumnae Hall at UC Berkeley on Wednesday afternoon, police say. UC Police says protesters have hopped the fence, broken window… [+727 chars]"
        },
       {
       "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "EMILY WANG FUJIYAMA, CHRISTOPHER BODEEN",
        "title": "Russia's Putin arrives in China for state visit in a show of unity between the authoritarian allies - The Associated Press",
        "description": "Russian President Vladimir Putin has arrived in Beijing for a two-day state visit to China. Putin’s visit comes as Russia has become more economically dependent on China following Moscow's full-scale invasion of Ukraine more than two years ago. An honor guard…",
        "url": "https://apnews.com/article/china-russia-putin-beijing-xi-3212ef85d8318cf853f956173f3a682a",
        "urlToImage": "https://dims.apnews.com/dims4/default/ea8141f/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4d%2F85%2F01dc82eb3d9fa943bbe9b2f8ae7a%2F9d4ccda75e8343ed88a11d530df3c537",
        "publishedAt": "2024-05-15T22:50:00Z",
        "content": "BEIJING (AP) Russias President Vladimir Putin arrived Thursday in Beijing for a two-day state visit to China, in a show of unity between the authoritarian allies as Moscow presses forward with a new … [+5970 chars]"
        },
       {
       "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "John Fritze, Fredreka Schouten",
        "title": "Supreme Court allows second majority-Black district in Louisiana over liberal dissents - CNN",
        "description": "The Supreme Court paused a chaotic legal fight over Louisiana’s congressional districts in a brief order Wednesday that will likely allow the state to use a map in this year’s election that creates a second majority-Black district and benefits Democrats.",
        "url": "https://www.cnn.com/2024/05/15/politics/supreme-court-louisiana-black-voters-congressional-district/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap23315011959695.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-05-15T22:39:00Z",
        "content": "The Supreme Court paused a chaotic legal fight over Louisianas congressional districts in a brief order Wednesday that will likely allow the state to use a map in this years election that creates a s… [+6837 chars]"
        },
       {
       "source": {
        "id": null,
        "name": "SFGate"
        },
        "author": "Dan Gentile",
        "title": "Reports of chaos on 'Megalopolis' set as trailer drops - SFGATE",
        "description": "More rumors about Francis Ford Coppola’s epic 'Megalopolis' emerge, with crew members recounting wasted filming days.",
        "url": "https://www.sfgate.com/sf-culture/article/megalopolis-set-rumors-trailer-19457698.php",
        "urlToImage": "https://s.hdnux.com/photos/01/37/33/05/25014603/3/rawImage.jpg",
        "publishedAt": "2024-05-15T22:25:49Z",
        "content": "An image of Adam Driver in Francis Ford Coppola's \"Megalopolis.\"\r\nAmerican Zoetrope / Mihai Malaimare\r\nFrancis Ford Coppolas forthcoming film Megalopolis is looking like it might be a beautiful disas… [+2877 chars]"
        }
        ]




    constructor(){
        super();
            this.state = {
     articles:this.articles
            }
        
    }




  render() {
    return (
      <div className='container'>
        
        
        
         <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <NewsItem title="title" description="description"
             imgUrL="https://s.hdnux.com/photos/01/37/33/05/25014603/3/rawImage.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <NewsItem title="title" description="description"
             imgUrL="https://s.hdnux.com/photos/01/37/33/05/25014603/3/rawImage.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <NewsItem title="title" description="description"
             imgUrL="https://s.hdnux.com/photos/01/37/33/05/25014603/3/rawImage.jpg"/>
            </div>
         </div>
         
         
         </div>
     
    )
  }
}

export default News