const videos = [
  {
    thumbnailImage: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
    videoDuration: "22:31",
    views: 22,
    monthsAgo: 19
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/-q1z8BPFItw/maxresdefault.jpg",
    title: "Debugging JavaScript - Beginner to Advance In One Video",
    videoDuration: "1:03:21",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/uuuzvOEC0zw/maxresdefault.jpg",
    title: "PyTorch Images and Logistic Regression",
    videoDuration: "2:09:33",
    views: 210,
    monthsAgo: 9
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/Z63TxAJotgQ/maxresdefault.jpg",
    title: "How to Find Freelance Jobs with 100% Success Rate",
    videoDuration: "25:09",
    views: 234,
    monthsAgo: 11
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/lX9hsdsAeTk/maxresdefault.jpg",
    title: "How to Undo Mistakes With Git Using Command Line",
    videoDuration: "58:20",
    views: 456,
    monthsAgo: 5
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/CRlGDDprdOQ/maxresdefault.jpg",
    title: "Difference Between Git Merge and Rebase",
    videoDuration: "18:11",
    views: 90,
    monthsAgo: 2
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/UoTxOVEecbI/maxresdefault.jpg",
    title: "Pixel Perfect with JavaScript and HTML Canvas - Tutorial",
    videoDuration: "1:49:22",
    views: 123,
    monthsAgo: 6
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/Yg5zkd9nm6w/maxresdefault.jpg",
    title: "E-commerce Video with Django and Vue Tutorial",
    videoDuration: "2:45:09",
    views: 888,
    monthsAgo: 2
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/B31LgI4Y4DQ/maxresdefault.jpg",
    title: "Data Structures - Full Course Using C and C++",
    videoDuration: "9:45:09",
    views: 388,
    monthsAgo: 11
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/flpmSXVTqBI/maxresdefault.jpg",
    title: "Java Testing - JUnit Testing Crash Course",
    videoDuration: "25:11",
    views: 118,
    monthsAgo: 11
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/XVv6mJpFOb0/maxresdefault.jpg",
    title: "Web Scraping with Python - Beautiful Soup Crash Course",
    videoDuration: "1:09:33",
    views: 648,
    monthsAgo: 3
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/SiBw7os-_zI/maxresdefault.jpg",
    title: "Intro to Object Oriented Programming - Crash Course",
    videoDuration: "30:00",
    views: 122,
    monthsAgo: 6
  },
  {
    thumbnailImage: "https://img.youtube.com/vi/WPqXP_kLzpo/maxresdefault.jpg",
    title: "Visual Studio Crash Course          ",
    videoDuration: "1:32:44",
    views: 402,
    monthsAgo: 3
  },
]


const main = document.querySelector("main")
main.innerHTML = ""
videos.forEach(video => {
  const newVideoItem = document.createElement("div")
  newVideoItem.classList.add("flex")
  newVideoItem.classList.add("flex-col")
  newVideoItem.classList.add("w-72")
  newVideoItem.innerHTML = 
  `
  <div class="flex flex-col w-72">
        <div class="video-thumbnail w-full h-44 relative">
          <img class="w-full h-full object-cover cursor-pointer"
            src="${video.thumbnailImage}" alt="video">
          <span class="text-white bg-black p-1 bottom-1 right-1 absolute text-xs">${video.videoDuration}</span>
        </div>
        <div class="mt-2 flex justify-between items-center">
          <img class="w-10 h-10 rounded-full cursor-pointer"
            src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj">
          <h3 class="ml-3 text-sm cursor-pointer font-bold">${video.title}
          </h3>
        </div>
        <div class="text-sm text-gray-600 mt-2 ml-12">
          <a class="text-gray-500 hover:text-gray-900" href="#">freeCodeCamp.org</a>
          <p class="text-gray-900">${video.views}k Views . ${video.monthsAgo} Months Ago</p>
        </div>
      </div>
  `
  main.appendChild(newVideoItem)
});
