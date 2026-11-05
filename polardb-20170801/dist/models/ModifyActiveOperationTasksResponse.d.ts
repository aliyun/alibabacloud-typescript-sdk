import * as $dara from '@darabonba/typescript';
import { ModifyActiveOperationTasksResponseBody } from "./ModifyActiveOperationTasksResponseBody";
export declare class ModifyActiveOperationTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyActiveOperationTasksResponseBody;
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
