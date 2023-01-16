import { Router } from 'express'
import { jwt } from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import { createOrder, getMyOrders, getAllOrders } from '../controllers/orders.js'

const router = Router()

router.post('/', jwt, createOrder)
router.get('/', jwt, getMyOrders)
router.get('/all', jwt, admin, getAllOrders)

export default router
