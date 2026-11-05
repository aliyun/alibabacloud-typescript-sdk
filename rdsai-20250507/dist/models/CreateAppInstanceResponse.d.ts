import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceResponseBody } from "./CreateAppInstanceResponseBody";
export declare class CreateAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppInstanceResponseBody;
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
