import * as $dara from '@darabonba/typescript';
import { DeletePolarFsQuotaResponseBody } from "./DeletePolarFsQuotaResponseBody";
export declare class DeletePolarFsQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePolarFsQuotaResponseBody;
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
