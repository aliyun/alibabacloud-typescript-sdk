import * as $dara from '@darabonba/typescript';
import { SetPolarFsFileQuotaResponseBody } from "./SetPolarFsFileQuotaResponseBody";
export declare class SetPolarFsFileQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetPolarFsFileQuotaResponseBody;
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
