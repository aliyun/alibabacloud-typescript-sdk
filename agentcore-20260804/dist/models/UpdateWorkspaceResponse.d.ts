import * as $dara from '@darabonba/typescript';
import { UpdateWorkspaceResponseBody } from "./UpdateWorkspaceResponseBody";
export declare class UpdateWorkspaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateWorkspaceResponseBody;
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
