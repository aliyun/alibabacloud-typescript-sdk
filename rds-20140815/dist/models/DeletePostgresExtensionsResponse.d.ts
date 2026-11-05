import * as $dara from '@darabonba/typescript';
import { DeletePostgresExtensionsResponseBody } from "./DeletePostgresExtensionsResponseBody";
export declare class DeletePostgresExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeletePostgresExtensionsResponseBody;
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
