import * as $dara from '@darabonba/typescript';
import { CreateDatabaseResponseBody } from "./CreateDatabaseResponseBody";
export declare class CreateDatabaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDatabaseResponseBody;
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
