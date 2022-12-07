function toggleModalVisibility(){
    document.getElementById('modal').classList.toggle("modal-hidden");
}

function loadContent(content){
    switch (content) {
        case "hard-and-separate":
            $("#modal-icon").attr("src", "icons/beans.png");
            $("#modal-title").text("Why is my poop hard and separate?");
            $("#modal-text").text("These hard lumps of stool are shaped like beans, nuts, or marbles. They are usually dry and difficult to pass. These pellets typically mean you're very constipated, and food is passing too slowly through the colon. This shouldn't happen often. Eat plenty of fiber, drink more water, and consider using over-the-counter laxatives. See a doctor if this lasts longer than a couple weeks, or if you go more than a few days without pooping.");
            toggleModalVisibility();
            break;
        case "hard-and-cracked":
            $("#modal-icon").attr("src", "icons/caterpillar.png");
            $("#modal-title").text("Why is my poop hard and cracked?");
            $("#modal-text").text("This stool is sausage-shaped, but lumpy like a caterpillar. This is a sign of mild constipation. Eat plenty of fiber and drink more water.");
            toggleModalVisibility();
            break;
        case "soft-and-smooth":
            $("#modal-icon").attr("src", "icons/snake.png");
            $("#modal-title").text("Why is my poop soft and smooth?");
            $("#modal-text").text("This stool is shaped like a snake or a hot dog. It is mostly smooth and soft, maybe with a few cracks on the surface. Good news - this is normal poop! It should be soft and easy to pass.");
            toggleModalVisibility();
            break;
        case "soft-and-blobby":
            $("#modal-icon").attr("src", "icons/amoeba.png");
            $("#modal-title").text("Why is my poop soft and blobby?");
            $("#modal-text").text("This amoeba-shaped stool is blobby with clear cut edges. Your diet is lacking fiber. Try eating more veggies, legumes, and whole grains.");
            toggleModalVisibility();
            break;
        case "mushy-and-ragged":
            $("#modal-icon").attr("src", "icons/cloud.png");
            $("#modal-title").text("Why is my poop mushy and ragged?");
            $("#modal-text").text("This stool is cloud-like, with fluffy pieces, ragged edges, and a mushy texture. This typically means you're experiencing mild diarrhea, and food is passing too quickly through the colon. Drink plenty of water and avoid heavy, greasy, or spicy foods that could further irritate your digestive tract.");
            toggleModalVisibility();
            break;
        case "watery-and-runny":
            $("#modal-icon").attr("src", "icons/drops.png");
            $("#modal-title").text("Why is my poop watery and runny?");
            $("#modal-text").text("This stool is entirely liquid without any solids. You're experiencing diarrhea, and food is passing too quickly through the colon. This shouldn't happen often. Drink plenty of water and avoid heavy, greasy, or spicy foods that could further irritate your digestive tract. Consider using over-the-counter anti-diarrheal medicine. See a doctor if this lasts longer than a couple days or if you experience other symptoms.");
            toggleModalVisibility();
            break;
        case "black":
                $("#modal-icon").attr("src", "icons/black.png");
                $("#modal-title").text("Why is my poop black?");
                $("#modal-text").text("Black stool can be caused by licorice, black stout, iron supplements, or bismuth medications (such as Pepto-Bismol). If you haven’t recently had any of these, black stool with a tar-like appearance can be a sign of gastrointestinal bleeding. You should make an appointment to see a doctor. If you experience other symptoms such as abdominal pain or feeling lightheaded, this could be an emergency and you should see a doctor immediately.");
                toggleModalVisibility();
                break;
        case "brown":
                $("#modal-icon").attr("src", "icons/brown.png");
                $("#modal-title").text("Why is my poop brown?");
                $("#modal-text").text("Good news - brown stool is normal! Poop contains a pigment called bilirubin, which causes the brown color.");
                toggleModalVisibility();
                break;
        case "red":
                $("#modal-icon").attr("src", "icons/red.png");
                $("#modal-title").text("Why is my poop red?");
                $("#modal-text").text("Red stool can be caused by beets, tomato juice, red berries, or red gelatin. If you haven’t recently eaten a lot of red foods, red stool can be a sign of gastrointestinal bleeding. You should make an appointment to see a doctor. If you experience other symptoms such as abdominal pain or feeling lightheaded, you should see a doctor immediately. If uncontrolled bleeding becomes continuous or heavy, this is a life-threatening emergency.");
                toggleModalVisibility();
                break;
        case "orange":
                $("#modal-icon").attr("src", "icons/orange.png");
                $("#modal-title").text("Why is my poop orange?");
                $("#modal-text").text("Hints of orange are normal, but fully orange stool can be caused by eating carrots, sweet potatoes, or other orange foods. Orange stool can also be caused by some antacids and the antibiotic rifampin. If you haven’t recently had any of these, orange stool can be a sign of liver or gallbladder issues, such as a blocked bile duct. You should make an appointment to see a doctor. If you experience other symptoms such as abdominal pain, yellowing skin, or dark urine, you should see a doctor immediately.");
                toggleModalVisibility();
                break;
        case "yellow":
                $("#modal-icon").attr("src", "icons/yellow.png");
                $("#modal-title").text("Why is my poop yellow?");
                $("#modal-text").text("Hints of yellow are normal, but fully yellow stool can be caused by eating carrots, sweet potatoes, or other yellow foods. If you haven’t recently eaten a lot of yellow foods, this could mean there is too much fat in your poop, especially if it appears greasy. In chronic cases, this could be caused by a malabsorption disorder like celiac disease. Alternatively, if your poop looks bright yellow, it could be a sign of an internal parasite called giardia. Giardia is most often contracted from contaminated water or exposure to another person with the condition. You should make an appointment to see a doctor. If you experience other symptoms such as abdominal pain or diarrhea, you should see a doctor immediately.");
                toggleModalVisibility();
                break;
        case "green":
                $("#modal-icon").attr("src", "icons/green.png");
                $("#modal-title").text("Why is my poop green?");
                $("#modal-text").text("Hints of green are normal, but fully green stool can be caused by eating spinach, kale, or other green foods. If you haven’t recently eaten a lot of green foods, this could mean there is too much bile in your poop. You should make an appointment to see a doctor. If you experience other symptoms such as abdominal pain or diarrhea, you should see a doctor immediately.");
                toggleModalVisibility();
                break;
        case "white":
                $("#modal-icon").attr("src", "icons/white.png");
                $("#modal-title").text("Why is my poop white?");
                $("#modal-text").text("White stool can be caused by some anti-diarrhea medications. If you haven’t recently taken anti-diarrhea medication, white stool with a light chalky appearance can be a sign of liver or gallbladder issues, such as a blocked bile duct. You should make an appointment to see a doctor. If you experience other symptoms such as abdominal pain, yellowing skin, or dark urine, you should see a doctor immediately.");
                toggleModalVisibility();
                break;
        default:
            console.error("No content found: " + content)
            $("#modal-icon").attr("src", "");
            $("#modal-title").text("Hmm, something went wrong...");
            $("#modal-text").text("");
            toggleModalVisibility();
    }
}





function escapeSupport(){
    $(document).keyup(function(e) {
        if(e.which == 27) {
            $(".modal").addClass("modal-hidden");
        }
    });
}

function easyModalClose(){
    $('.modal').click(function() {
        if (!$(event.target).is('.modal')) {
            toggleModalVisibility();
        }
    });
}

easyModalClose();
escapeSupport();