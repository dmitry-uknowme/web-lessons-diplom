<?php require "includes/cfg.php";
$lessons = mysqli_query($connection, 'SELECT * FROM `lessons`');
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
			<section class="intro col-md-8" id="intro">
				<h2 class="intro__title text-primary">Уроки</h2>
				<div class="intro__content py-5">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="container">
									<div class="row">
										<?php while ($res = mysqli_fetch_assoc($lessons)) { ?>
											<div class="col-md-4">
												<div class="card">
													<span class="card-number text-success"> <?php echo $res['id'] ?> </span>
													<div class="card-body">
														<h5 class="card-title"><?php echo $res['title'] ?></h5>
														<p class="card-text"><?php echo ($res['body']) ?></p>

													</div>
													<a class="btn btn-primary" href="lesson.php?id=<?php echo $res['id']; ?>">Перейти к уроку</a>
												</div>
											</div>
										<?php } ?>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="test" id="test">
				<h2 class="test__title">Тест</h2>
				<div class="test__box">
					<div class="test__ask">Здесь будет вопроc</div>
					<ol class="test__answers">
						<li class="test__answer"><input type="radio" name="test" class="test__answer-input">
							<div class="test__answer-text">Вариант ответа 1</div>
						</li>
						<li class="test__answer"><input type="radio" name="test" class="test__answer-input">
							<div class="test__answer-text">Вариант ответа 2</div>
						</li>
						<li class="test__answer"><input type="radio" name="test" class="test__answer-input">
							<div class="test__answer-text">Вариант ответа 3</div>
						</li>
						<li class="test__answer"><input type="radio" name="test" class="test__answer-input">
							<div class="test__answer-text">Вариант ответа 4</div>
						</li>
					</ol>
				</div>
			</section>
			<section class="sources" id="sources">
				<div class="source__title">Литература</div>
				<ul class="source__list">
					<li class="source__list-item source__list-item_book">Адитья Бхаргава | Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</li>
					<li class="source__list-item source__list-item_book">Дакетт Джон | HTML и CSS. Разработка и дизайн веб-сайтов</li>
					<li class="source__list-item source__list-item_book">Анатолий Тузовский |Проектирование и разработка web-приложений. Учебное пособие для академического бакалавриата</li>
				</ul>
				<div class="source__title">Web-сайты</div>
				<ul class="source__list">
					<a class="source__list-item source__list-item_web" href="https://learn.javascript.ru">https://learn.javascript.ru</a>
					<a class="source__list-item source__list-item_web" href="https://htmlacademy.ru">https://htmlacademy.ru</a>
				</ul>
			</section>
		</div>
	</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./index.js"></script>

</html>