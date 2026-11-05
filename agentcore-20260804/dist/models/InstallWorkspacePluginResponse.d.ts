import * as $dara from '@darabonba/typescript';
import { InstallWorkspacePluginResponseBody } from "./InstallWorkspacePluginResponseBody";
export declare class InstallWorkspacePluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: InstallWorkspacePluginResponseBody;
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
