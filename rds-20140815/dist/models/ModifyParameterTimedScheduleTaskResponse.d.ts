import * as $dara from '@darabonba/typescript';
import { ModifyParameterTimedScheduleTaskResponseBody } from "./ModifyParameterTimedScheduleTaskResponseBody";
export declare class ModifyParameterTimedScheduleTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyParameterTimedScheduleTaskResponseBody;
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
