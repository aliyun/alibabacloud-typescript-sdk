import * as $dara from '@darabonba/typescript';
import { ListScheduledTasksResponseBody } from "./ListScheduledTasksResponseBody";
export declare class ListScheduledTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListScheduledTasksResponseBody;
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
