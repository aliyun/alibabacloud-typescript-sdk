import * as $dara from '@darabonba/typescript';
import { CheckPolarFsQuotaConsistencyResponseBody } from "./CheckPolarFsQuotaConsistencyResponseBody";
export declare class CheckPolarFsQuotaConsistencyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckPolarFsQuotaConsistencyResponseBody;
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
