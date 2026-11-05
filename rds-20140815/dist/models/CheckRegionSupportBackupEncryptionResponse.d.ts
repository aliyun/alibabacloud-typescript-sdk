import * as $dara from '@darabonba/typescript';
import { CheckRegionSupportBackupEncryptionResponseBody } from "./CheckRegionSupportBackupEncryptionResponseBody";
export declare class CheckRegionSupportBackupEncryptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckRegionSupportBackupEncryptionResponseBody;
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
