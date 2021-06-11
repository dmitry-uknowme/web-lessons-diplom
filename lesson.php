<?php require "includes/cfg.php";
$lesson_id = $_GET['id'];
$lesson_query = mysqli_query($connection, "SELECT * FROM `lessons` WHERE id ='" . $lesson_id . "';");
$lesson = mysqli_fetch_assoc($lesson_query);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Электронный учебник Web Assembler</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <?php include "./includes/header.php" ?>
    <div class="container-fluid">
        <div class="row">
            <?php include "./includes/navbar.php" ?>
            <section class="lesson col-md-9">
                <h2 class="lesson__title">
                    <?php echo $lesson['title'] ?>
                </h2>
                <p class="lesson__text">
                    <?php echo $lesson['body'] ?>
                </p>
            </section>


        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>

</html>