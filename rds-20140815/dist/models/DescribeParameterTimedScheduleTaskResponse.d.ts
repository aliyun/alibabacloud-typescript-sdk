import * as $dara from '@darabonba/typescript';
import { DescribeParameterTimedScheduleTaskResponseBody } from "./DescribeParameterTimedScheduleTaskResponseBody";
export declare class DescribeParameterTimedScheduleTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeParameterTimedScheduleTaskResponseBody;
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
