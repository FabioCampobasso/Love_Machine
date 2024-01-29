<?php

if (isset($_FILES['screenshot'])) {
    $target_dir = "uploads/"; // Assicurati che questa directory esista e sia scrivibile sul tuo server
    $target_file = $target_dir . basename($_FILES["screenshot"]["name"]);

    if (move_uploaded_file($_FILES["screenshot"]["tmp_name"], $target_file)) {
        echo "File caricato con successo.";
    } else {
        echo "Errore nel caricamento del file.";
    }
} else {
    echo "Nessun file ricevuto.";
}

?>
