import * as $dara from '@darabonba/typescript';
import { DeleteUserResponseBody } from "./DeleteUserResponseBody";
export declare class DeleteUserResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteUserResponseBody;
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
