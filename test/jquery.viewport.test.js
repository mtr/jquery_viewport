test("threshold", function(){
    var frame = frames[0];
    var img = frame.$("img");
    ok(!frame.$.viewport.inViewport(img, {threshold: 0}), "left 0");
    ok(!frame.$.viewport.inViewport(img, {threshold: 50}), "left 50");
    ok(frame.$.viewport.inViewport(img, {threshold: 150}), "left 150");

    frame.scroll(1200, 0);

    ok(!frame.$.viewport.inViewport(img, {threshold: 0}), "right 0");
    ok(frame.$.viewport.inViewport(img, {threshold: 400}), "right 400");

    frame.scroll(600, 300);

    ok(frame.$.viewport.inViewport(img, {threshold: -100}), "middle -100");
});
