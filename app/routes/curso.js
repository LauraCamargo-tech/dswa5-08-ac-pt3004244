module.exports = function(app) {
    var controller = app.controllers.curso;
    app.route('/cursos')
        .get(controller.listaCursos)
        .post(controller.salvaCurso);
    app.route('/cursos/:id')
        .get(controller.obtemCurso)
        .delete(controller.removeCurso);
};