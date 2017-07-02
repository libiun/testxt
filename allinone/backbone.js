$(function() {
  // 模型
  var studentmodel = Backbone.Model.extend({
    default: {
      Code: "10001",
      Name: "张三",
      Score: 100
    }
  });
  // 集合
  var studentcollection = Backbone.Collection.extend({
    initialize: function(model, options) {
      this.on("add", options.view.showmodel);
    }
  });
  // 视图
  var studentview = Backbone.View.extend({
    el: $("body"),
    initialize: function() {
      this.studentlistinview = new studentcollection(null, {
        view: this
      })
    },
    events: {
      "click #btnSubmit": "addmodel"
    },
    addmodel: function() {
      var studentmodelnew = new studentmodel({
        Code: $("#txtCode").val(),
        Name: $("#txtName").val(),
        Score: $("#txtScore").val()
      });
      this.studentlistinview.add(studentmodelnew);
    },
    showmodel: function(model) {
      this.template = _.template($("#stus-tpl").html());
      $("#ulshowstus").append(this.template(model.toJSON()));
    }
  });
  // 实例化一个view
  var stuv = new studentview();
});
