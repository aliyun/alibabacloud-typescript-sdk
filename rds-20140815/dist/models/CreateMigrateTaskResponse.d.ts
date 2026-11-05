import * as $dara from '@darabonba/typescript';
import { CreateMigrateTaskResponseBody } from "./CreateMigrateTaskResponseBody";
export declare class CreateMigrateTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateMigrateTaskResponseBody;
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
