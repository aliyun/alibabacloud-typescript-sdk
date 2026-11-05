import * as $dara from '@darabonba/typescript';
import { DescribeInstanceLinkedWhitelistTemplateResponseBody } from "./DescribeInstanceLinkedWhitelistTemplateResponseBody";
export declare class DescribeInstanceLinkedWhitelistTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceLinkedWhitelistTemplateResponseBody;
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
