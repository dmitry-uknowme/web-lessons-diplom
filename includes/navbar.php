 <?php require "includes/cfg.php";
    $lessons2 = mysqli_query($connection, 'SELECT id,title FROM `lessons`');
    if (isset($_GET['id'])) {
        $lesson_id2 = intval($_GET['id']);
    } else {
        $lesson_id2 = null;
    }
    ?>
 <div class="nav col-md-2">
     <ul class="nav__list list-unstyled text-primary">
         <li class="mb-1">
             <button class="btn btn-toggle align-items-center rounded text-primary" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">Уроки</button>
             <div class="collapse show" id="home-collapse">
                 <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                     <?php while ($res2 = mysqli_fetch_assoc($lessons2)) { ?>
                         <?php if ($lesson_id2 == null) { ?>
                             <li><a href="lesson.php?id=<?php echo $res2['id']; ?>" class="link-dark rounded">Урок <?php echo ($res2['id']) ?>. <?php echo ($res2['title']) ?></a></li>
                         <?php } ?>
                         <?php if ($lesson_id2 != null) { ?>
                             <?php if ($res2['id'] == $lesson_id2) { ?>
                                 <li><a href="lesson.php?id=<?php echo $res2['id']; ?>" class="link-dark rounded">Урок <?php echo ($res2['id']) ?>. <?php echo ($res2['title']) ?></a></li>
                             <?php  } ?>
                             <?php if ($res2['id'] != $lesson_id2) { ?>
                                 <li><a href="lesson.php?id=<?php echo $res2['id']; ?>" class="link-dark rounded  text-secondary">Урок <?php echo ($res2['id']) ?>. <?php echo ($res2['title']) ?></a></li>
                             <?php  } ?>
                         <?php } ?>

                     <?php } ?>
                 </ul>
             </div>
         </li>
         <li class="mb-1 link-dark rounded">
             <a class="btn btn-toggle align-items-center rounded" href="./#test">Финальный тест</a>
         </li>
         <li class="mb-1 link-dark rounded">
             <a class="btn btn-toggle align-items-center rounded" href="./#sources">Источники</a>
         </li>
     </ul>
 </div>