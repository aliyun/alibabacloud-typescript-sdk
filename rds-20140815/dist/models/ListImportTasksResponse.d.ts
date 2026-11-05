import * as $dara from '@darabonba/typescript';
import { ListImportTasksResponseBody } from "./ListImportTasksResponseBody";
export declare class ListImportTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListImportTasksResponseBody;
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
