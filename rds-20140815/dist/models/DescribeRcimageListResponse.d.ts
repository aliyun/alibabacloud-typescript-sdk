import * as $dara from '@darabonba/typescript';
import { DescribeRCImageListResponseBody } from "./DescribeRcimageListResponseBody";
export declare class DescribeRCImageListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCImageListResponseBody;
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
