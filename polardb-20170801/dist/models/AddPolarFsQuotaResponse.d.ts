import * as $dara from '@darabonba/typescript';
import { AddPolarFsQuotaResponseBody } from "./AddPolarFsQuotaResponseBody";
export declare class AddPolarFsQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddPolarFsQuotaResponseBody;
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
