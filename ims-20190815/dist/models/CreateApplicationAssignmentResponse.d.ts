import * as $dara from '@darabonba/typescript';
import { CreateApplicationAssignmentResponseBody } from "./CreateApplicationAssignmentResponseBody";
export declare class CreateApplicationAssignmentResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateApplicationAssignmentResponseBody;
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
