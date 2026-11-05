import * as $dara from '@darabonba/typescript';
import { GetAppWorkspaceDirectoryResponseBody } from "./GetAppWorkspaceDirectoryResponseBody";
export declare class GetAppWorkspaceDirectoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppWorkspaceDirectoryResponseBody;
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
