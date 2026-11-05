import * as $dara from '@darabonba/typescript';
import { DescribeRdsResourceSettingsResponseBody } from "./DescribeRdsResourceSettingsResponseBody";
export declare class DescribeRdsResourceSettingsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRdsResourceSettingsResponseBody;
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
