import * as $dara from '@darabonba/typescript';
import { ListWorkspacesResponseBody } from "./ListWorkspacesResponseBody";
export declare class ListWorkspacesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListWorkspacesResponseBody;
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
