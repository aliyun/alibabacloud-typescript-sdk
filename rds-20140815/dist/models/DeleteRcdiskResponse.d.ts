import * as $dara from '@darabonba/typescript';
import { DeleteRCDiskResponseBody } from "./DeleteRcdiskResponseBody";
export declare class DeleteRCDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCDiskResponseBody;
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
