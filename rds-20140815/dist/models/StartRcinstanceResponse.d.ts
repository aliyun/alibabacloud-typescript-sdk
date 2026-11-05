import * as $dara from '@darabonba/typescript';
import { StartRCInstanceResponseBody } from "./StartRcinstanceResponseBody";
export declare class StartRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartRCInstanceResponseBody;
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
