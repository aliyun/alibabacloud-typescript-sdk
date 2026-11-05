import * as $dara from '@darabonba/typescript';
import { ListGroupsResponseBody } from "./ListGroupsResponseBody";
export declare class ListGroupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListGroupsResponseBody;
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
