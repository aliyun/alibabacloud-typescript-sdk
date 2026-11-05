import * as $dara from '@darabonba/typescript';
import { DescribeSecretsResponseBody } from "./DescribeSecretsResponseBody";
export declare class DescribeSecretsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSecretsResponseBody;
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
