import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceResponseBody } from "./ModifyRcinstanceResponseBody";
export declare class ModifyRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCInstanceResponseBody;
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
