function replaceText (node) {
    if (node) {
        if (node.nodeName === "NOSCRIPT" || node.nodeName === "SCRIPT" || node.nodeName === "STYLE"
        || node.nodeName === "CITE")
       {
           return;
       }
       if (node.nodeType === Node.TEXT_NODE) {
           if (node.parentNode &&
               node.parentNode.nodeName === "TEXTAREA") {
               return;
           }
           node.textContent = node.textContent.replace(/b/gi, '🅱️');
       }
       else {
           for (let i = 0; i < node.childNodes.length; i++) {
           replaceText(node.childNodes[i]);
           }    
       }
    }
}  

replaceText(document.body);