import * as $dara from '@darabonba/typescript';
import { DeleteUserInRecycleBinResponseBody } from "./DeleteUserInRecycleBinResponseBody";
export declare class DeleteUserInRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteUserInRecycleBinResponseBody;
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
