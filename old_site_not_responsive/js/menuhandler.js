$(document).ready(function(){
      // Top Navigation Menu:
      $("#index_click").click(function(e){
      	e.preventDefault();
      	// $("#body_id").load('index.html');
      });

      $("#about_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('aboutus.html');
      });

      $("#contact_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('contact.html');
      });

      $("#terms_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('terms.html');
      });

      $("#sitemap_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('sitemap.html');
      });

      	$("#faq_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('faq.html');
      });            

      	$("#thanks_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('thanks.html');
      }); 


      //	Navigation Menu Posts:

      //    Tools
      $("#vmware_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('posts/tools/vmware.html');
      }); 

      $("#virtualbox_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('posts/tools/virtualbox.html');
      });

      $("#mingw_click").click(function(e){
      	e.preventDefault();
      	$("#body_id").load('posts/tools/mingw.html');
      });

      //    Tools Second Part
      $("#dualboot_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/tools/dualboot.html');
      });    

      $("#remote_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/tools/remote.html');
      });  

      $("#usblive_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/tools/usblive.html')
      });

      //    Editors
      $("#sublime_text_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/sublime_text.html')
      });

      $("#atom_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/atom.html')
      });

      $("#ultra_edit_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/ultra_edit.html')
      });

      $("#gedit_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/gedit.html')
      });

      $("#notepad_plus_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/notepad_plus.html')
      });

      // IDE
      $("#dev_c_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/dev_c.html')
      });

      $("#visual_studio_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/visual_studio.html')
      });

      $("#codeblocks_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/codeblocks.html')
      });
      
      $("#online_compiler_click").click(function(e){
            e.preventDefault();
            $("#body_id").load('posts/editors/online_compiler.html')
      });
});       