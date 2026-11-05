import * as $dara from '@darabonba/typescript';
import { ImportUserBackupFileResponseBody } from "./ImportUserBackupFileResponseBody";
export declare class ImportUserBackupFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ImportUserBackupFileResponseBody;
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
