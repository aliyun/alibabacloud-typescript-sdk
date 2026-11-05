import * as $dara from '@darabonba/typescript';
import { ResizeRCInstanceDiskResponseBody } from "./ResizeRcinstanceDiskResponseBody";
export declare class ResizeRCInstanceDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResizeRCInstanceDiskResponseBody;
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
