import * as $dara from '@darabonba/typescript';
import { CreateResourceControlResponseBody } from "./CreateResourceControlResponseBody";
export declare class CreateResourceControlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateResourceControlResponseBody;
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
