import * as $dara from '@darabonba/typescript';
import { ListUsersForGroupResponseBody } from "./ListUsersForGroupResponseBody";
export declare class ListUsersForGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListUsersForGroupResponseBody;
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
