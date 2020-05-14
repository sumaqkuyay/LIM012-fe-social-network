/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

// import { modelComment } from '../templates/templateComment.js';

export const saveUser = (user) => {
  const db = firebase.firestore();
  db.collection('usuarios').doc(user.email).set({
    nameUser: user.displayName,
    photoURL: user.photoURL,
    emailUser: user.email,
  });
};


export const getUser = (user) => {
  // console.log(user);
  const db = firebase.firestore();
  db.collection('usuarios')
    .onSnapshot((doc) => {
      doc.forEach((usuarios) => {
        // console.log('Current data: ', usuarios.data());
      });
    });
};

export const savePost = (user, email, photo, date, datetime, content, postImg) => {
  const firestore = firebase.firestore();
  return firestore.collection('posts').add({
    user,
    email,
    photo,
    date,
    datetime,
    content,
    postImg,
  });
};
export const deletePost = id => firebase.firestore().collection('posts').doc(id).delete();

export const editPost = (id, content) => firebase.firestore().collection('posts').doc(id).update({ content });

export const saveComment = (postId, comment, user, email, photo, date, datetime) => {
  const firestore = firebase.firestore();
  return firestore.collection('comments').add({
    postId,
    comment,
    user,
    email,
    photo,
    date,
    datetime,
  });
};

export const deleteComment = id => firebase.firestore().collection('comments').doc(id).delete();

export const editComment = (id, comment) => firebase.firestore().collection('comments').doc(id).update({ comment });


/* export const loadComment = (idpost) => {
  firebase.firestore().collection('comments').where('id', '==', idpost)
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((posts) => {
      const post = posts.data();
      // console.log(post);
      modelComment(post);
    });
  });
};

export const saveComent = (id, coment, user, email, photo, date, datetime) => {
  firebase.firestore().collection('comments').add({
    id,
    coment,
    user,
    email,
    photo,
    date,
    datetime,
  });
  loadComment(id);
}; */
export const saveLikes = (id) => {
  firebase.firestore().collection('likes').add({
    id,
    count: '01',
  });
};

/* export const savePost = (user, date, content) => {
  const firestore = firebase.firestore();
  firestore.collection('posts').add({
    user,
    date,
    content,
  }).then((posts)=>{
    console.log('Document written with ID', posts.id);
  }).catch((error) => {
    console.error('Error adding document: ', error);
  });
}; */
