import * as $dara from '@darabonba/typescript';
import { EditPluginConfigResponseBody } from "./EditPluginConfigResponseBody";
export declare class EditPluginConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EditPluginConfigResponseBody;
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
