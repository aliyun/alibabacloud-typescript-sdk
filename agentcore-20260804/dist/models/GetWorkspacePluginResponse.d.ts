import * as $dara from '@darabonba/typescript';
import { GetWorkspacePluginResponseBody } from "./GetWorkspacePluginResponseBody";
export declare class GetWorkspacePluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetWorkspacePluginResponseBody;
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
