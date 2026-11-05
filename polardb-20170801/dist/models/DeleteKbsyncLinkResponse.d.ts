import * as $dara from '@darabonba/typescript';
import { DeleteKBSyncLinkResponseBody } from "./DeleteKbsyncLinkResponseBody";
export declare class DeleteKBSyncLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteKBSyncLinkResponseBody;
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
