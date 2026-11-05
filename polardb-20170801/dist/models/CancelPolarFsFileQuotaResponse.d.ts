import * as $dara from '@darabonba/typescript';
import { CancelPolarFsFileQuotaResponseBody } from "./CancelPolarFsFileQuotaResponseBody";
export declare class CancelPolarFsFileQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CancelPolarFsFileQuotaResponseBody;
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
