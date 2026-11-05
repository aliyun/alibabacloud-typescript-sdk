import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseMembersResponseBody } from "./ListContextDatabaseMembersResponseBody";
export declare class ListContextDatabaseMembersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseMembersResponseBody;
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
