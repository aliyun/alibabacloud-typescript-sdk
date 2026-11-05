import * as $dara from '@darabonba/typescript';
import { AttachRCDiskResponseBody } from "./AttachRcdiskResponseBody";
export declare class AttachRCDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AttachRCDiskResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
