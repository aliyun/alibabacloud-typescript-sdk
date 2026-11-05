import * as $dara from '@darabonba/typescript';
import { AddUserToGroupResponseBody } from "./AddUserToGroupResponseBody";
export declare class AddUserToGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddUserToGroupResponseBody;
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
