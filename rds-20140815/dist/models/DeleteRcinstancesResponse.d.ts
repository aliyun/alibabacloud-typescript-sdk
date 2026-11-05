import * as $dara from '@darabonba/typescript';
import { DeleteRCInstancesResponseBody } from "./DeleteRcinstancesResponseBody";
export declare class DeleteRCInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCInstancesResponseBody;
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
