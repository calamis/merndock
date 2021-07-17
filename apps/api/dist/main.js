"use strict";
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/api', function (req, res) {
    res.send({ message: 'Welcome to api damboy!' });
});
var port = process.env.port || 5000;
var server = app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/api");
});
server.on('error', console.error);
"";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7Ozs7QUFFSCxvREFBOEI7QUFFOUIsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdEMsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBaUMsSUFBSSxTQUFNLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUFDLEVBQUUsQ0FBQSJ9