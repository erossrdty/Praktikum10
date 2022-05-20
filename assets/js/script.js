$(document).ready(function () {
    var page = 0;
    $('#load-film').click(function () {
        $.get("film.php?page=" + page, function (respon) {
            $.each(respon, function (key, value) {
                $('#film').append('<div class="col d-flex justify-content-center mb-4"><div class="card shadow zoom"> <img src="https://altfilmlens.files.wordpress.com/2022/03/image-4.png?w=627" class="card-img-top" alt="' + value.title + '"> <div class="card-body"><h5 class="card-title text-uppercase">' + value.title + '</h5><div class="d-flex justify-content-between"><p class="card-text">Rating: ' + value.rating + '</p><div><ul><li class="nav-item mx-2 d-inline"><a href="#"><i class="bi bi-pencil-square edit"></i></a></li><li class="nav-item d-inline"><a href="#"><i class="bi bi-trash hapus text-danger"></i></a></li></ul></div></div></div></div></div>');
            });
            page += 12;
        });
    }).trigger('click');
});