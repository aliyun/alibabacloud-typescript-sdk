import * as $dara from '@darabonba/typescript';
import { SyncRCSecurityGroupResponseBody } from "./SyncRcsecurityGroupResponseBody";
export declare class SyncRCSecurityGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SyncRCSecurityGroupResponseBody;
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
