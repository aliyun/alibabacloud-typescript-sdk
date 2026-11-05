import * as $dara from '@darabonba/typescript';
import { QueryMaterialFileDetailResponseBody } from "./QueryMaterialFileDetailResponseBody";
export declare class QueryMaterialFileDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryMaterialFileDetailResponseBody;
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
