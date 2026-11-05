import * as $dara from '@darabonba/typescript';
import { CreateModelConnectionResponseBody } from "./CreateModelConnectionResponseBody";
export declare class CreateModelConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateModelConnectionResponseBody;
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
