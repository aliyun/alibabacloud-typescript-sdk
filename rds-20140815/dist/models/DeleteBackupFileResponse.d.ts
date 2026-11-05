import * as $dara from '@darabonba/typescript';
import { DeleteBackupFileResponseBody } from "./DeleteBackupFileResponseBody";
export declare class DeleteBackupFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteBackupFileResponseBody;
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
