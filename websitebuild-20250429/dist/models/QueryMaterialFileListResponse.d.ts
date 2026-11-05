import * as $dara from '@darabonba/typescript';
import { QueryMaterialFileListResponseBody } from "./QueryMaterialFileListResponseBody";
export declare class QueryMaterialFileListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryMaterialFileListResponseBody;
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
