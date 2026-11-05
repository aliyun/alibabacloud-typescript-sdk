import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceKeyPairResponseBody } from "./ModifyRcinstanceKeyPairResponseBody";
export declare class ModifyRCInstanceKeyPairResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCInstanceKeyPairResponseBody;
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
