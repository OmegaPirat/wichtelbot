import db from "../db/index.mjs";

async function validateTelegramRegistration(userId) {
    let userCount = await db.TelegramUser.count({
        where: {
            userId
        }
    })
    return Boolean(userCount);
}

export { validateTelegramRegistration };
