
// fetch("books.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (books) {
//     let out = "";
//     for (let item of books) {
//       out += `<div class="main-content"> 
//         <div class="title-content">
//           <h1>${item.name}</h1>
//         </div>
//         <div class="seperator"></div>
//         <div class="book-img-section">
//           <img class="book-img" src="./image/book.png" alt="">
//         </div>
//         <div class="seperator"></div>
//         <div class="price-like-section">
//           <span class="price">${item.price.toFixed(2).replace(".", ",")} €</span>
//           <div class="like-section">
//             <span>${item.likes}</span>
//             <img onclick="likeOrDislike(${item.id})" id="likeImg${item.id}" src="" alt="">
//           </div>
//         </div>
//         <div class="book-detail-section">
//           <div class="book-details">
//             <span>Author</span>
//             <span>Erscheinungsjahr</span>
//             <span>Genre</span>
//           </div>
//           <div class="book-detail-description">
//             <span>${item.author}</span>
//             <span>${item.publishedYear}</span>
//             <span>${item.genre}</span>
//           </div>
//         </div>
//         <div class="seperator"></div>
//         <div class="comment-area">
//           <span id="commentHeadline${item.id}" class="comment-headline">Kommentare:</span>
//           <div class="comment-section">
//             <div id="commentatorSection${item.id}" class="commentator"></div>
//             <div id="commentSection${item.id}" class="comment"></div>
//           </div>
//         </div>
//         <div class="add-comment-section">
//           <input id="inputField${item.id}" placeholder="Schreibe deinen Kommentar..." type="text">
//           <img onclick="addComment(${item.id})" src="./image/telegram.png" alt="">
//         </div>
//       </div>`;
//     }
//     document.querySelector(".books").innerHTML = out;
//   });



































// // fetch("books.json")
// // .then(function(response){
// //   return response.json();
// // });

// // .then(function(books){
// //   let out = "";
// //   for(let item of books){
// //     out += `<div class="main-content"> 
// //       <duv class="title-content">
// //       <h1>${item.name}</h1>
// //       </div>
// //         <div class="seperator"></div>
// //       <div class="book-img-section">
// //         <img class="book-img" src="./image/book.png" alt="">
// //     </div>
// //        <div class="seperator"></div>
// //       <div class="price-like-section">
// //         <span class="price">${book.price.toFixed(2).replace(".", ",")} €</span>
// //         <div class="like-section">
// //             <span>${book.likes}</span>
// //             <img onclick="likeOrDislike(${item})" id="likeImg${item}" src="" alt="">
// //         </div>
// //     </div>
// //          <div class="book-detail-section">
// //         <div class="book-details">
// //             <span>Author</span>
// //             <span>Erscheinungsjahr</span>
// //             <span>Genre</span>
// //         </div>
// //         <div class="book-detail-description">
// //             <span>${book.author}</span>
// //             <span>${book.publishedYear}</span>
// //             <span>${book.genre}</span>
// //         </div>
// //     </div>
// //       <div class="seperator"></div>
// //          <div class="comment-area">
// //         <span id="commentHeadline${item}" class="comment-headline">Kommentare:</span>
// //         <div class="comment-section">
// //             <div id="commentatorSection${item}" class="commentator"></div>
// //             <div id="commentSection${item}" class="comment"></div>
// //         </div>
// //     </div>
// //       <div class="add-comment-section">
// //         <input id="inputField${item}" placeholder="Schreibe deinen Kommentar..." type="text">
// //         <img onclick="addComment(${item})" src="./image/telegram.png" alt="">
// //     </div>

// //        `
// //   }
// //     document.querySelector(".books").innerHTML = out;

// // })





// function render() {
//     fetch("books.json")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (books) {
//             let out = "";
//             for (let item of books) {
//               const likeImgSrc = item.liked ? "./image/like.png" : "./image/dislike.png";
//                 out += `<div class="main-content"> 
//                     <div class="title-content">
//                         <h1>${item.name}</h1>
//                     </div>
//                     <div class="seperator"></div>
//                     <div class="book-img-section">
//                         <img class="book-img" src="./image/book.png" alt="">
//                     </div>
//                     <div class="seperator"></div>
//                     <div class="price-like-section">
//                         <span class="price">${item.price.toFixed(2).replace(".", ",")} €</span>
//                         <div class="like-section">
//                             <span>${item.likes}</span>
//                             <img onclick="likeOrDislike(${item.id})" id="likeImg${item.id}" src="" alt="">
//                         </div>
//                     </div>
//                     <div class="book-detail-section">
//                         <div class="book-details">
//                             <span>Author</span>
//                             <span>Erscheinungsjahr</span>
//                             <span>Genre</span>
//                         </div>
//                         <div class="book-detail-description">
//                             <span>${item.author}</span>
//                             <span>${item.publishedYear}</span>
//                             <span>${item.genre}</span>
//                         </div>
//                     </div>
//                     <div class="seperator"></div>
//                     <div class="comment-area">
//                         <span id="commentHeadline${item.id}" class="comment-headline">Kommentare:</span>
//                         <div class="comment-section">
//                             <div id="commentatorSection${item.id}" class="commentator"></div>
//                             <div id="commentSection${item.id}" class="comment"></div>
//                         </div>
//                     </div>
//                     <div class="add-comment-section">
//                         <input id="inputField${item.id}" placeholder="Schreibe deinen Kommentar..." type="text">
//                         <img onclick="addComment(${item.id})" src="./image/telegram.png" alt="">
//                     </div>
//                 </div>`;
//             }
//             document.querySelector("#content-section").innerHTML = out;
//         });
// }

function render() {
    fetch("books.json")
        .then(response => response.json())
        .then(books => {
            let out = "";
            books.forEach(item => {
                // Liked holatini tekshirish va to'g'ri rasmni tanlash
                const likeImgSrc = item.liked ? "./image/heart.png" : "./image/heart-white.png";
                
                out += `
                    <div class="main-content"> 
                        <div class="title-content">
                            <h1>${item.name}</h1>
                        </div>
                        <div class="seperator"></div>
                        <div class="book-img-section">
                            <img class="book-img" src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="seperator"></div>
                        <div class="price-like-section">
                            <span class="price">${item.price.toFixed(2).replace(".", ",")} €</span>
                            <div class="like-section">
                                <span id="likeCount${item.id}">${item.likes}</span>
                                <img 
                                    id="likeImg${item.id}" 
                                    src="${likeImgSrc}" 
                                    alt="like" 
                                    onclick="likeOrDislike(${item.id})"
                                >
                            </div>
                        </div>
                        <div class="book-detail-section">
                            <div class="book-details">
                                <span>Author</span>
                                <span>Erscheinungsjahr</span>
                                <span>Genre</span>
                            </div>
                            <div class="book-detail-description">
                                <span>${item.author}</span>
                                <span>${item.publishedYear}</span>
                                <span>${item.genre}</span>
                            </div>
                        </div>
                        <div class="seperator"></div>
                        <div class="comment-area">
                            <span id="commentHeadline${item.id}" class="comment-headline">Kommentare:</span>
                            <div class="comment-section">
                                <div id="commentatorSection${item.id}" class="commentator"></div>
                                <div id="commentSection${item.id}" class="comment"></div>
                            </div>
                        </div>
                        <div class="add-comment-section">
                            <input id="inputField${item.id}" placeholder="Schreibe deinen Kommentar..." type="text">
                            <img onclick="addComment(${item.id})" src="./image/telegram.png" alt="">
                        </div>
                    </div>`;
                
                


            });
            document.querySelector("#content-section").innerHTML = out;
           
        });
}

function likeOrDislike(bookId) {
    // Like img va like count elementlarini topish
    const likeImg = document.getElementById(`likeImg${bookId}`);
    const likeCount = document.getElementById(`likeCount${bookId}`);
    
    // Like qilish holatini almashtirish
    if (likeImg.src.includes("heart.png")) {
        likeImg.src = "./image/heart-white.png"; // Dislike qilish
        likeCount.textContent = parseInt(likeCount.textContent) - 1; // Like sonini kamaytirish
    } else {
        likeImg.src = "./image/heart.png"; // Like qilish
        likeCount.textContent = parseInt(likeCount.textContent) + 1; // Like sonini oshirish
    }
}

function addComment(bookId) {
    const inputField = document.getElementById(`inputField${bookId}`);
    const commentText = inputField.value.trim();

    if (commentText === "") return;

    const commentatorSection = document.getElementById(`commentatorSection${bookId}`);
    const commentSection = document.getElementById(`commentSection${bookId}`);
    
    const newCommentator = document.createElement("div");
    newCommentator.classList.add("commentator");
    newCommentator.textContent = "you:";

    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.textContent = commentText;

    commentatorSection.appendChild(newCommentator);
    commentSection.appendChild(newComment);

    inputField.value = "";
}



