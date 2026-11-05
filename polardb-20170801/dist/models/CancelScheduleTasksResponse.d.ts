import * as $dara from '@darabonba/typescript';
import { CancelScheduleTasksResponseBody } from "./CancelScheduleTasksResponseBody";
export declare class CancelScheduleTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CancelScheduleTasksResponseBody;
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
