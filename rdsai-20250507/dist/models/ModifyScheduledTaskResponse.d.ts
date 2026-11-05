import * as $dara from '@darabonba/typescript';
import { ModifyScheduledTaskResponseBody } from "./ModifyScheduledTaskResponseBody";
export declare class ModifyScheduledTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyScheduledTaskResponseBody;
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
