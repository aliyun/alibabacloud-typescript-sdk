import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseWorkspaceResponseBody } from "./UpdateContextDatabaseWorkspaceResponseBody";
export declare class UpdateContextDatabaseWorkspaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseWorkspaceResponseBody;
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
