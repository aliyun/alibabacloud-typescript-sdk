import * as $dara from '@darabonba/typescript';
import { ListGroupsForUserResponseBody } from "./ListGroupsForUserResponseBody";
export declare class ListGroupsForUserResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListGroupsForUserResponseBody;
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
