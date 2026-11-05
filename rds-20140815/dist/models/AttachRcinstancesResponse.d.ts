import * as $dara from '@darabonba/typescript';
import { AttachRCInstancesResponseBody } from "./AttachRcinstancesResponseBody";
export declare class AttachRCInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AttachRCInstancesResponseBody;
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
