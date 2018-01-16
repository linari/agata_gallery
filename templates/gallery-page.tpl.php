<?php
$path = current_path();
//$year = strpos($path, '20') !== false ? substr($path, -4) : date("Y");
$year = strpos($path, '20') !== false ? substr($path, -4) : '2017';
?>

<div id="agata-gallery-page" class="gallery-page">
  <div id="agata-gallery-videos" class="gallery-tab">
      <?= views_embed_view('gallery', 'block', $year); ?>
  </div>
  <div id="agata-gallery-images" class="gallery-tab">
      <?= views_embed_view('gallery', 'block_1', $year); ?>
  </div>
</div>
