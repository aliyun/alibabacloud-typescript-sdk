import * as $dara from '@darabonba/typescript';
import { DescribeRCCloudAssistantStatusResponseBody } from "./DescribeRccloudAssistantStatusResponseBody";
export declare class DescribeRCCloudAssistantStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCCloudAssistantStatusResponseBody;
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
