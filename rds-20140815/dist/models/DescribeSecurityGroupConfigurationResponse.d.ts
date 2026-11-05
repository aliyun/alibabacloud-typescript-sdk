import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupConfigurationResponseBody } from "./DescribeSecurityGroupConfigurationResponseBody";
export declare class DescribeSecurityGroupConfigurationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSecurityGroupConfigurationResponseBody;
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
