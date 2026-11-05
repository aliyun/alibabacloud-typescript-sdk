import * as $dara from '@darabonba/typescript';
import { DeleteDatabaseResponseBody } from "./DeleteDatabaseResponseBody";
export declare class DeleteDatabaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDatabaseResponseBody;
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
