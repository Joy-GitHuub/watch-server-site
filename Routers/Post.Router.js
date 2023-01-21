const express = require('express');
const Router = express.Router();
const postController = require('../Controllers/Post.Controller');
const uploader = require('../Middleware/uploader');





Router.route('/post-upload')
    .post(postController.postUpload)
    .get(postController.getPost)

Router.route('/image-upload')
    .post(uploader.single("image"), postController.fileUpload)


Router.route('/userComment')
    .put(postController.updateUserCommentPost)


Router.route('/photoLike')
    .put(postController.photoLike)


Router.route('/photoDownload')
    .patch(postController.photoDownloadCount)


Router.route('/singlePost/:id')
    .get(postController.getSinglePost)

module.exports = Router;