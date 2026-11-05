import * as $dara from '@darabonba/typescript';
import { UpdatePostgresExtensionsResponseBody } from "./UpdatePostgresExtensionsResponseBody";
export declare class UpdatePostgresExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdatePostgresExtensionsResponseBody;
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
