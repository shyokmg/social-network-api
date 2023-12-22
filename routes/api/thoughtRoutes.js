const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// all thoughts /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// single thoughts by id /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


// add reactions by thoughts id /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// delete reactions by thoughts id /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;
