import * as $dara from '@darabonba/typescript';
import { DescribeAllWhitelistTemplateResponseBody } from "./DescribeAllWhitelistTemplateResponseBody";
export declare class DescribeAllWhitelistTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAllWhitelistTemplateResponseBody;
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
