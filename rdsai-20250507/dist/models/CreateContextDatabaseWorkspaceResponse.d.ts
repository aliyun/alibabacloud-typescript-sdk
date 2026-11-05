import * as $dara from '@darabonba/typescript';
import { CreateContextDatabaseWorkspaceResponseBody } from "./CreateContextDatabaseWorkspaceResponseBody";
export declare class CreateContextDatabaseWorkspaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateContextDatabaseWorkspaceResponseBody;
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
