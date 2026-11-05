import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseWorkspacesResponseBody } from "./ListContextDatabaseWorkspacesResponseBody";
export declare class ListContextDatabaseWorkspacesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseWorkspacesResponseBody;
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
