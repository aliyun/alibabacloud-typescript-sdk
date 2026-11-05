import * as $dara from '@darabonba/typescript';
import { CopyDatabaseResponseBody } from "./CopyDatabaseResponseBody";
export declare class CopyDatabaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CopyDatabaseResponseBody;
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
