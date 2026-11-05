import * as $dara from '@darabonba/typescript';
import { DescribePolarFsQuotaListResponseBody } from "./DescribePolarFsQuotaListResponseBody";
export declare class DescribePolarFsQuotaListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarFsQuotaListResponseBody;
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
