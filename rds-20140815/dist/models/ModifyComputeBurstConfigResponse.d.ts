import * as $dara from '@darabonba/typescript';
import { ModifyComputeBurstConfigResponseBody } from "./ModifyComputeBurstConfigResponseBody";
export declare class ModifyComputeBurstConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyComputeBurstConfigResponseBody;
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
