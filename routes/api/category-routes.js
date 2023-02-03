const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll().then((categories) => {
    res.json(categories);
  });
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id)
    .then((category) => {
      res.json(category);
    })
});

router.post('/', async (req, res) => {
  const categoryData = await Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async(req, res) => {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(categoryData);
});

module.exports = router;
