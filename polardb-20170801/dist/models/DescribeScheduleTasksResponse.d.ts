import * as $dara from '@darabonba/typescript';
import { DescribeScheduleTasksResponseBody } from "./DescribeScheduleTasksResponseBody";
export declare class DescribeScheduleTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeScheduleTasksResponseBody;
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
