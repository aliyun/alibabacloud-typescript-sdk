import * as $dara from '@darabonba/typescript';
import { UpdateAppPluginResponseBody } from "./UpdateAppPluginResponseBody";
export declare class UpdateAppPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppPluginResponseBody;
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
