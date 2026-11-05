import * as $dara from '@darabonba/typescript';
import { UpdateUserResponseBody } from "./UpdateUserResponseBody";
export declare class UpdateUserResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateUserResponseBody;
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
