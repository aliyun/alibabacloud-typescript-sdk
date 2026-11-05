import * as $dara from '@darabonba/typescript';
import { StopRCInstancesResponseBody } from "./StopRcinstancesResponseBody";
export declare class StopRCInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StopRCInstancesResponseBody;
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
