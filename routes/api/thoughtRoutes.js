const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/applications
router.route('/').get(getThought).post(createThought);

// /api/applications/:applicationId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route('/:thoughtId/reactions').post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
