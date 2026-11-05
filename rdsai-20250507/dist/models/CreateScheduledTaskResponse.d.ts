import * as $dara from '@darabonba/typescript';
import { CreateScheduledTaskResponseBody } from "./CreateScheduledTaskResponseBody";
export declare class CreateScheduledTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateScheduledTaskResponseBody;
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
