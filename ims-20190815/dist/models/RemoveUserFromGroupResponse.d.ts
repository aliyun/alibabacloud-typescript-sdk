import * as $dara from '@darabonba/typescript';
import { RemoveUserFromGroupResponseBody } from "./RemoveUserFromGroupResponseBody";
export declare class RemoveUserFromGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveUserFromGroupResponseBody;
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
