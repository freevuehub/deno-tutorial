import { Router } from './deps.ts'

const router = new Router()

router.get('/', (context) => {
  context.response.body = {
    success: true,
    msg: 'Hello World',
    message: 'Hello World'
  }
})
router.get('/foo', (context) => {
  context.response.body = {
    success: true,
    message: 'Hello Foo',
  }
})
router.get('/foo/:id', (context) => {
  context.response.body = {
    success: true,
    message: `Hello Foo! Here is ${context.params.id}`,
  }
})

export default router
