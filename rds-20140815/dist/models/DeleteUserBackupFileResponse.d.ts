import * as $dara from '@darabonba/typescript';
import { DeleteUserBackupFileResponseBody } from "./DeleteUserBackupFileResponseBody";
export declare class DeleteUserBackupFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteUserBackupFileResponseBody;
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
