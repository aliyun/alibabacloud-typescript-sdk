import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceChargeTypeResponseBody } from "./ModifyRcinstanceChargeTypeResponseBody";
export declare class ModifyRCInstanceChargeTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCInstanceChargeTypeResponseBody;
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
