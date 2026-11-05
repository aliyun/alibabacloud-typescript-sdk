import * as $dara from '@darabonba/typescript';
import { CancelActiveOperationTasksResponseBody } from "./CancelActiveOperationTasksResponseBody";
export declare class CancelActiveOperationTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CancelActiveOperationTasksResponseBody;
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
