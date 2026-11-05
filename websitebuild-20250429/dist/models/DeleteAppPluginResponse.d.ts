import * as $dara from '@darabonba/typescript';
import { DeleteAppPluginResponseBody } from "./DeleteAppPluginResponseBody";
export declare class DeleteAppPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppPluginResponseBody;
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
