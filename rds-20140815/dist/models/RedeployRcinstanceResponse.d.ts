import * as $dara from '@darabonba/typescript';
import { RedeployRCInstanceResponseBody } from "./RedeployRcinstanceResponseBody";
export declare class RedeployRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RedeployRCInstanceResponseBody;
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
