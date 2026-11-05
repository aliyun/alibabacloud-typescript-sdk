import * as $dara from '@darabonba/typescript';
import { QueryMaterialDirectoryTreeResponseBody } from "./QueryMaterialDirectoryTreeResponseBody";
export declare class QueryMaterialDirectoryTreeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryMaterialDirectoryTreeResponseBody;
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
