import * as $dara from '@darabonba/typescript';
import { CreateBackupResponseBody } from "./CreateBackupResponseBody";
export declare class CreateBackupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateBackupResponseBody;
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
