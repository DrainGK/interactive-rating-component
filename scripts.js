$(document).ready(function(){

    let buttonSelected = undefined

    $(".circle").on("click", function () {
        if (buttonSelected !== undefined) {
            let currentButton = findButton(buttonSelected)
            currentButton.toggleClass("circle-selected")
        }
        buttonSelected = $(this).text()
        $(this).toggleClass("circle-selected")

    })

    function findButton(number) {
        let result
        $(".circle").each(function () {
            if(number == $(this).text()) {
                result = $(this)
                return 
            }
        })
        return result
    }

    $(".rectangle button").on('click', function(){
        $(".square").toggleClass("hidden")
        $("#selected-number").text(buttonSelected)
    })

})