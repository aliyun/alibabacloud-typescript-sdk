import * as $dara from '@darabonba/typescript';
import { ValidateImportTaskResponseBody } from "./ValidateImportTaskResponseBody";
export declare class ValidateImportTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ValidateImportTaskResponseBody;
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
