import * as $dara from '@darabonba/typescript';
import { RebootRCInstanceResponseBody } from "./RebootRcinstanceResponseBody";
export declare class RebootRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RebootRCInstanceResponseBody;
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
