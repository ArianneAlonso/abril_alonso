import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
  deleteOrder, actualizarOrder,
} from "../controllers/order.controller.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", createOrderCtrl);
ordersRouter.put("/:id", actualizarOrder);
ordersRouter.delete("/:id", deleteOrder);

export { ordersRouter };
