import * as $dara from '@darabonba/typescript';
import { StopRCInstanceResponseBody } from "./StopRcinstanceResponseBody";
export declare class StopRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StopRCInstanceResponseBody;
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
