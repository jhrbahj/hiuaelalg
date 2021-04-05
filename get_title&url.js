 const page_title = 
 const page_url = 
 
 title&url = "[" + page_title + "_" + page_url + "]"
 
 
 async function copyToClipboard(title&url) {
   try {
     await navigator.clipboard.writeText(title&url)
     alert('コピーしました')
   } catch (error) {
     alert((error && error.message) || 'コピーに失敗しました')
   }
 }
