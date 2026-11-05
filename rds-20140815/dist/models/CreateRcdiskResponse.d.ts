import * as $dara from '@darabonba/typescript';
import { CreateRCDiskResponseBody } from "./CreateRcdiskResponseBody";
export declare class CreateRCDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRCDiskResponseBody;
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
