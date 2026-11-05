import * as $dara from '@darabonba/typescript';
import { ListUsersInRecycleBinResponseBody } from "./ListUsersInRecycleBinResponseBody";
export declare class ListUsersInRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListUsersInRecycleBinResponseBody;
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
