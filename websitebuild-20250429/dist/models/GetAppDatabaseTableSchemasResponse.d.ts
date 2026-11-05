import * as $dara from '@darabonba/typescript';
import { GetAppDatabaseTableSchemasResponseBody } from "./GetAppDatabaseTableSchemasResponseBody";
export declare class GetAppDatabaseTableSchemasResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppDatabaseTableSchemasResponseBody;
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
