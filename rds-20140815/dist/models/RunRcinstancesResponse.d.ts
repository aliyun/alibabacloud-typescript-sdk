import * as $dara from '@darabonba/typescript';
import { RunRCInstancesResponseBody } from "./RunRcinstancesResponseBody";
export declare class RunRCInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RunRCInstancesResponseBody;
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
