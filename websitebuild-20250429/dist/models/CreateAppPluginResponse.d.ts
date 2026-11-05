import * as $dara from '@darabonba/typescript';
import { CreateAppPluginResponseBody } from "./CreateAppPluginResponseBody";
export declare class CreateAppPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppPluginResponseBody;
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
