const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let arrLen=library.length;
	let booksCount=0;
	for(let i=0;i<arrLen;i++){
		let status=library[i].readingStatus;
		if(status){
			booksCount+=1;
			
		}
	}
	return booksCount;
};

// Do not change the code below

// alert(numberOfBooksRead());
