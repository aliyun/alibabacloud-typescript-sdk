import * as $dara from '@darabonba/typescript';
import { QueryMaterialTaskDetailResponseBody } from "./QueryMaterialTaskDetailResponseBody";
export declare class QueryMaterialTaskDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryMaterialTaskDetailResponseBody;
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
