import * as $dara from '@darabonba/typescript';
import { UpdateKBSyncLinkResponseBody } from "./UpdateKbsyncLinkResponseBody";
export declare class UpdateKBSyncLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateKBSyncLinkResponseBody;
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
