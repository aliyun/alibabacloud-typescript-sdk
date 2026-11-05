import * as $dara from '@darabonba/typescript';
import { QueryMaterialFileSummaryInfoResponseBody } from "./QueryMaterialFileSummaryInfoResponseBody";
export declare class QueryMaterialFileSummaryInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryMaterialFileSummaryInfoResponseBody;
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
