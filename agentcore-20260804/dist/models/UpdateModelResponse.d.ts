import * as $dara from '@darabonba/typescript';
import { UpdateModelResponseBody } from "./UpdateModelResponseBody";
export declare class UpdateModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateModelResponseBody;
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
