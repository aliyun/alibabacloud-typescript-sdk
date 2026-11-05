import * as $dara from '@darabonba/typescript';
import { ModifyAccountPasswordResponseBody } from "./ModifyAccountPasswordResponseBody";
export declare class ModifyAccountPasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountPasswordResponseBody;
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
