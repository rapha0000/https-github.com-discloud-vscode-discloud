import archiver from "archiver";
import { createWriteStream, unlinkSync, WriteStream } from "fs";

export class Zip {
    path: string;

    constructor(path: string, format: archiver.Format, options?: archiver.ArchiverOptions | undefined) {
        this.create(path, format, options);
        this.path = path;
    }

    zip: archiver.Archiver | null = null;
    stream: WriteStream | null = null;

    private create(path: string, format: archiver.Format, options?: archiver.ArchiverOptions | undefined) {
        this.stream = createWriteStream(path);
        this.zip = archiver(format, options);
    }
}