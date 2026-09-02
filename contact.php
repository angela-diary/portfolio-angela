<?php
// Adapt this endpoint in Laravel (controller + validation + mail) when the app is integrated.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Method not allowed'); }
$name = trim($_POST['name'] ?? ''); $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL); $message = trim($_POST['message'] ?? '');
if (!$name || !$email || !$message) { http_response_code(422); exit('Merci de remplir tous les champs.'); }
// No address is hard-coded here: configure delivery in the future Laravel application.
header('Content-Type: text/html; charset=utf-8');
echo '<!doctype html><title>Message reçu</title><style>body{margin:0;display:grid;min-height:100vh;place-items:center;background:#F5F3EE;color:#171717;font:18px Arial}main{max-width:550px;padding:32px}a{color:#171717}</style><main><h1>Merci, '.htmlspecialchars($name, ENT_QUOTES, 'UTF-8').' !</h1><p>Votre message a bien été préparé. La livraison par email sera activée lors de l’intégration Laravel.</p><p><a href="index.html#contact">← Retour au portfolio</a></p></main>';
