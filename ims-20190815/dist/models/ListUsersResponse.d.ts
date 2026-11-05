import * as $dara from '@darabonba/typescript';
import { ListUsersResponseBody } from "./ListUsersResponseBody";
export declare class ListUsersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListUsersResponseBody;
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
