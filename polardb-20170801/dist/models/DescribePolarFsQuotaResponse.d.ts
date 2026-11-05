import * as $dara from '@darabonba/typescript';
import { DescribePolarFsQuotaResponseBody } from "./DescribePolarFsQuotaResponseBody";
export declare class DescribePolarFsQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarFsQuotaResponseBody;
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
