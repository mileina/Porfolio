<?php
// Vérifiez si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Récupérez les données du formulaire
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validez les données (ajoutez vos propres validations si nécessaire)

  // Configurez les paramètres d'envoi d'e-mail
  $to = 'meas.pinya@gmail.com';
  $subject = 'Nouveau message de formulaire de contact';
  $messageBody = "Nom: $name\n";
  $messageBody .= "Email: $email\n";
  $messageBody .= "Message: $message\n";
  $headers = "From: contact@example.com\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Envoyez l'e-mail
  $success = mail($to, $subject, $messageBody, $headers);

  // Vérifiez si l'e-mail a été envoyé avec succès
  if ($success) {
    // L'e-mail a été envoyé avec succès
    echo "Votre message a été envoyé avec succès.";
  } else {
    // Une erreur s'est produite lors de l'envoi de l'e-mail
    echo "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.";
  }
} else {
  // Redirection en cas d'accès direct au fichier send_email.php
  header("Location: index.html");
  exit();
}
?>
