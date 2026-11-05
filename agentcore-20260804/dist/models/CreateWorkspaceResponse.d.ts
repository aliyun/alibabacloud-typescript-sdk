import * as $dara from '@darabonba/typescript';
import { CreateWorkspaceResponseBody } from "./CreateWorkspaceResponseBody";
export declare class CreateWorkspaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateWorkspaceResponseBody;
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
