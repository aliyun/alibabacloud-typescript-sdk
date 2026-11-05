import * as $dara from '@darabonba/typescript';
import { GetGroupResponseBody } from "./GetGroupResponseBody";
export declare class GetGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetGroupResponseBody;
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
