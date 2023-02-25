const
   X3D     = require ("../../../X3D"),
   Matrix4 = X3D .require ("standard/Math/Numbers/Matrix4")

test ("constructor", () =>
{
   expect (new Matrix4 ()) .toEqual ({
      0:1, 1:0, 2:0, 3:0,
      4:0, 5:1, 6:0, 7:0,
      8:0, 9:0, 10:1, 11:0,
      12:0, 13:0, 14:0, 15:1,
   })
})
