import * as $dara from '@darabonba/typescript';
import { DescribeWhitelistTemplateLinkedInstanceResponseBody } from "./DescribeWhitelistTemplateLinkedInstanceResponseBody";
export declare class DescribeWhitelistTemplateLinkedInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeWhitelistTemplateLinkedInstanceResponseBody;
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
