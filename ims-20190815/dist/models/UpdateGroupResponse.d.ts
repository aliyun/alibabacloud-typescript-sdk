import * as $dara from '@darabonba/typescript';
import { UpdateGroupResponseBody } from "./UpdateGroupResponseBody";
export declare class UpdateGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateGroupResponseBody;
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
