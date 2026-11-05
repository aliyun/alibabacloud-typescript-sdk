import * as $dara from '@darabonba/typescript';
import { ModifyRCDiskChargeTypeResponseBody } from "./ModifyRcdiskChargeTypeResponseBody";
export declare class ModifyRCDiskChargeTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCDiskChargeTypeResponseBody;
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
