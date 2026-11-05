import * as $dara from '@darabonba/typescript';
import { ReplaceRCInstanceSystemDiskResponseBody } from "./ReplaceRcinstanceSystemDiskResponseBody";
export declare class ReplaceRCInstanceSystemDiskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReplaceRCInstanceSystemDiskResponseBody;
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
