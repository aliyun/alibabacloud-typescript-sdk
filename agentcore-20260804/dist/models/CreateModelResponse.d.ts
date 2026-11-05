import * as $dara from '@darabonba/typescript';
import { CreateModelResponseBody } from "./CreateModelResponseBody";
export declare class CreateModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateModelResponseBody;
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
