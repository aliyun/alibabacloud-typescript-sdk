import * as $dara from '@darabonba/typescript';
import { CreateUserResponseBody } from "./CreateUserResponseBody";
export declare class CreateUserResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateUserResponseBody;
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
