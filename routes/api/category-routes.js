const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({
    include: { model: Product }
    })
    .then((categories) => {
      res.json(categories);
    });
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id, {
    include: { model: Product }
  })
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

router.put('/:id', async (req, res) => {
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
  res.json(categoryData);
});

router.delete('/:id', async(req, res) => {
  const categoryData = await Category.destroy(
    {
    where: {
      id: req.params.id
    }
    })
  res.json(categoryData);
});

module.exports = router;
