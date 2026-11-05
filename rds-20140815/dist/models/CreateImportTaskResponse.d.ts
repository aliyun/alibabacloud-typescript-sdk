import * as $dara from '@darabonba/typescript';
import { CreateImportTaskResponseBody } from "./CreateImportTaskResponseBody";
export declare class CreateImportTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateImportTaskResponseBody;
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
