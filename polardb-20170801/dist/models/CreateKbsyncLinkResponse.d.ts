import * as $dara from '@darabonba/typescript';
import { CreateKBSyncLinkResponseBody } from "./CreateKbsyncLinkResponseBody";
export declare class CreateKBSyncLinkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateKBSyncLinkResponseBody;
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
