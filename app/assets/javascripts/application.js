// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .

$(document).ready(function() {
  $('.info_concedente').mouseover(function() {
    $('.rotate_info').show(400);
    $('.div_concedente').show(400);
  });

  $('.info_concedente').mouseleave(function() {
    $('.rotate_info').hide(200);
    $('.div_concedente').hide(200);
  });
});

$(document).ready(function() {
  $('.clausulas').hide();
  $('.conteudo').show();

  $('.confirmacao_preenchimento').slideDown(300);
  $('.clausulas_conteudo').slideDown(300);
  $('.clausulas_conteudo').css("background-color", "rgba(10,10,10,0.6)");

  $('.confirma_preenchimento').click(function() {
    $('.confirmacao_preenchimento').slideUp(300);
    $('.clausulas_conteudo').slideUp(300);
  });

  $('.avancar').click(function() {
    $('.clausulas').show(800);
    $('.clausulas_conteudo').show(800);
    $('.clausulas_conteudo').css("background-color", "rgba(10,10,10,0.6)");
  });

  $('.cancelar').click(function() {
    $('.clausulas').hide(800);
    $('.clausulas_conteudo').hide(800);
  });

  $('.btn1').mouseover(function() {
      $('.div_federal').slideDown();
  });

  $('.div_federal').mouseleave(function() {
      $('.div_federal').slideUp();
  });

  $('.btn2').mouseover(function() {
      $('.div_federal2').slideDown();
  });

  $('.div_federal2').mouseleave(function() {
      $('.div_federal2').slideUp();
  });

  $('.desaparece_botao').click( function() {
    $('.desaparece_botao').hide(700);
  });
});
