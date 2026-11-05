import * as $dara from '@darabonba/typescript';
import { ModifyImportTaskResponseBody } from "./ModifyImportTaskResponseBody";
export declare class ModifyImportTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyImportTaskResponseBody;
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
