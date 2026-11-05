import * as $dara from '@darabonba/typescript';
import { GetAppPluginConfigResponseBody } from "./GetAppPluginConfigResponseBody";
export declare class GetAppPluginConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppPluginConfigResponseBody;
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
