import * as $dara from '@darabonba/typescript';
import { RenewRCInstanceResponseBody } from "./RenewRcinstanceResponseBody";
export declare class RenewRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RenewRCInstanceResponseBody;
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
