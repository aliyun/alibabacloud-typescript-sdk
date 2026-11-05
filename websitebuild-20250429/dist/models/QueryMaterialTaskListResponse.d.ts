import * as $dara from '@darabonba/typescript';
import { QueryMaterialTaskListResponseBody } from "./QueryMaterialTaskListResponseBody";
export declare class QueryMaterialTaskListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryMaterialTaskListResponseBody;
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
