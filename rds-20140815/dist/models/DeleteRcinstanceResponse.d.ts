import * as $dara from '@darabonba/typescript';
import { DeleteRCInstanceResponseBody } from "./DeleteRcinstanceResponseBody";
export declare class DeleteRCInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCInstanceResponseBody;
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
