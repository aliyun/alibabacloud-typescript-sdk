import * as $dara from '@darabonba/typescript';
import { DeleteModelResponseBody } from "./DeleteModelResponseBody";
export declare class DeleteModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteModelResponseBody;
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
