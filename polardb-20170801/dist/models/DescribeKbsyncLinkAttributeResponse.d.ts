import * as $dara from '@darabonba/typescript';
import { DescribeKBSyncLinkAttributeResponseBody } from "./DescribeKbsyncLinkAttributeResponseBody";
export declare class DescribeKBSyncLinkAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKBSyncLinkAttributeResponseBody;
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
