import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDatabaseNetworkResponseBody } from "./DescribeGlobalDatabaseNetworkResponseBody";
export declare class DescribeGlobalDatabaseNetworkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGlobalDatabaseNetworkResponseBody;
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
