import * as $dara from '@darabonba/typescript';
import { UpdateUserBackupFileResponseBody } from "./UpdateUserBackupFileResponseBody";
export declare class UpdateUserBackupFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateUserBackupFileResponseBody;
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
