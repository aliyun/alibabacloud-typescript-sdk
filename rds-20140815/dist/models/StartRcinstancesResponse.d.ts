import * as $dara from '@darabonba/typescript';
import { StartRCInstancesResponseBody } from "./StartRcinstancesResponseBody";
export declare class StartRCInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartRCInstancesResponseBody;
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
