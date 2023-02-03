const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagData = await Tag.findAll()
    .then((tags) => {
      res.json(tags);
    });
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id)
    .then((tag) => {
      res.json(tag);
    })
});

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', async (req, res) => {
  const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
  res.json(tagData);
});

router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(tagData);
});

module.exports = router;
