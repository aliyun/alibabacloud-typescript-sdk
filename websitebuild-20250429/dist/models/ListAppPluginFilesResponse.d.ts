import * as $dara from '@darabonba/typescript';
import { ListAppPluginFilesResponseBody } from "./ListAppPluginFilesResponseBody";
export declare class ListAppPluginFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAppPluginFilesResponseBody;
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
