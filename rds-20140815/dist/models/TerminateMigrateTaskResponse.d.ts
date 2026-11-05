import * as $dara from '@darabonba/typescript';
import { TerminateMigrateTaskResponseBody } from "./TerminateMigrateTaskResponseBody";
export declare class TerminateMigrateTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: TerminateMigrateTaskResponseBody;
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
