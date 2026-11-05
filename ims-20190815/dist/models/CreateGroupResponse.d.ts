import * as $dara from '@darabonba/typescript';
import { CreateGroupResponseBody } from "./CreateGroupResponseBody";
export declare class CreateGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateGroupResponseBody;
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
