/* 
    Rutas de Usuarios /Auth
    host + /api/auth
 */
const { Router } = require("express");
const router = Router();

router.post("/new", (req, res) => {
  res.json({ ok: true, msg: "registro" });
});

router.post("/", (req, res) => {
  res.json({ ok: true, msg: "login" });
});

router.post("/renew", (req, res) => {
  res.json({ ok: true, msg: "renew" });
});

module.exports = router;
