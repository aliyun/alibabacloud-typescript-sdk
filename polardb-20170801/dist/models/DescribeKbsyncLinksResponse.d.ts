import * as $dara from '@darabonba/typescript';
import { DescribeKBSyncLinksResponseBody } from "./DescribeKbsyncLinksResponseBody";
export declare class DescribeKBSyncLinksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKBSyncLinksResponseBody;
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
