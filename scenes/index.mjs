import { Scenes } from "telegraf";
import registerScenes from "./register.scene.mjs";

const stage = new Scenes.Stage([...registerScenes ]);

export default stage;
