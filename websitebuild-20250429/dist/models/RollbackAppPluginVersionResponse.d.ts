import * as $dara from '@darabonba/typescript';
import { RollbackAppPluginVersionResponseBody } from "./RollbackAppPluginVersionResponseBody";
export declare class RollbackAppPluginVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RollbackAppPluginVersionResponseBody;
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
