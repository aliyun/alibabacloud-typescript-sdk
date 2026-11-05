import * as $dara from '@darabonba/typescript';
import { ModifyAccountLockStateResponseBody } from "./ModifyAccountLockStateResponseBody";
export declare class ModifyAccountLockStateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountLockStateResponseBody;
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
