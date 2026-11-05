import * as $dara from '@darabonba/typescript';
import { DeleteScheduledTaskResponseBody } from "./DeleteScheduledTaskResponseBody";
export declare class DeleteScheduledTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteScheduledTaskResponseBody;
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
