import * as $dara from '@darabonba/typescript';
import { DeleteBackupResponseBody } from "./DeleteBackupResponseBody";
export declare class DeleteBackupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteBackupResponseBody;
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
