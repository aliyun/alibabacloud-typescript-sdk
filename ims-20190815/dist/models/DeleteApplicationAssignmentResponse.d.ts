import * as $dara from '@darabonba/typescript';
import { DeleteApplicationAssignmentResponseBody } from "./DeleteApplicationAssignmentResponseBody";
export declare class DeleteApplicationAssignmentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteApplicationAssignmentResponseBody;
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
