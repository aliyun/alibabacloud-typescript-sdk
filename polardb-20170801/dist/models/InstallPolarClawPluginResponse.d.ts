import * as $dara from '@darabonba/typescript';
import { InstallPolarClawPluginResponseBody } from "./InstallPolarClawPluginResponseBody";
export declare class InstallPolarClawPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: InstallPolarClawPluginResponseBody;
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
