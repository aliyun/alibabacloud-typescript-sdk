import * as $dara from '@darabonba/typescript';
import { CreateInspectionTaskResponseBody } from "./CreateInspectionTaskResponseBody";
export declare class CreateInspectionTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateInspectionTaskResponseBody;
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
