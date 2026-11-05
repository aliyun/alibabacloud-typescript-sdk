import * as $dara from '@darabonba/typescript';
import { InstallAppPluginResponseBody } from "./InstallAppPluginResponseBody";
export declare class InstallAppPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: InstallAppPluginResponseBody;
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
