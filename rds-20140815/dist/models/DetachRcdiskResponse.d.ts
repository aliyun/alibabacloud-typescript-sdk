import * as $dara from '@darabonba/typescript';
import { DetachRCDiskResponseBody } from "./DetachRcdiskResponseBody";
export declare class DetachRCDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DetachRCDiskResponseBody;
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
