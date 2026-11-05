import * as $dara from '@darabonba/typescript';
import { DeleteContextDatabaseWorkspaceResponseBody } from "./DeleteContextDatabaseWorkspaceResponseBody";
export declare class DeleteContextDatabaseWorkspaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteContextDatabaseWorkspaceResponseBody;
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
