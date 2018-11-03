// define variables
const $notes = $("#notes");
const $noteTitle = $("#noteTitle");
const $noteBody = $("#noteBody");


// define functions
const displayNotes = function () {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then(function (notesData) {
    // console.log(notesData);
    $notes.empty();
    for (let i = 0; i < notesData.length; i++) {
      let $noteItem = $("<li class='list-group-item'>");
      let $deleteBtn = $("<button class='deleteNote float-right'>").text("Delete");
      $deleteBtn.attr("data-noteid", notesData[i].id);
      $noteItem.append(
        $("<h4>").text(notesData[i].title),
        $("<span>").text(notesData[i].body),
        $deleteBtn
      );
      $notes.append($noteItem);
    }
  });
};

const addNote = function (newNote) {
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: newNote
  }).then(function (results) {
    console.log(results);
    displayNotes();
  });
};

const deleteNote = function (noteId) {
  $.ajax({
    url: "/api/notes/" + noteId,
    method: "DELETE"
  }).then(function (results) {
    console.log(results);
    displayNotes();
  });
};

// define events
$("#addNote").on("click", function (event) {
  event.preventDefault();
  console.log("clicked to add note");
  const newNote = {
    title: $noteTitle.val().trim(),
    body: $noteBody.val().trim()
  }
  addNote(newNote);
});

$(document).on("click", '.deleteNote', function (event) {
  event.preventDefault();
  console.log("clicked to delete note");
  let noteId = $(this).data("noteid");
  deleteNote(noteId);
});

// call the initial display of the notes
displayNotes();