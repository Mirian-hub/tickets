import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptoAsync = promisify(scrypt);

export class Password {
  static async hash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptoAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
  }
  static async compare(storedPassword: string, newPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(".");
    const buf = (await scryptoAsync(newPassword, salt, 64)) as Buffer;

    return buf.toString("hex") === hashedPassword;
  }
}
