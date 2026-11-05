import * as $dara from '@darabonba/typescript';
import { DescibeImportsFromDatabaseResponseBody } from "./DescibeImportsFromDatabaseResponseBody";
export declare class DescibeImportsFromDatabaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescibeImportsFromDatabaseResponseBody;
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
