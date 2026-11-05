import * as $dara from '@darabonba/typescript';
import { ModifyDBNodeConfigResponseBody } from "./ModifyDbnodeConfigResponseBody";
export declare class ModifyDBNodeConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodeConfigResponseBody;
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
