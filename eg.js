    var tablinks = documents.getElementByClassName("tab-links")
    var tabcontents = document.getElementByClassName("tab-contents")

    function opentab(tabname) {
        for (tablink in tablinks){
            tablink.classlist.remove("active-link")
        }
        for(tabcontent in tabcontents){
            tabcontent.classlist.remove("active-tab")
        }
        event.currentTarget.classlist.add("active-link")
        document.getElementById(tabname).classlist.add("active-tab")

    }

    