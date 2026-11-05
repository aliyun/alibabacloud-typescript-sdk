import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDatabaseNetworksResponseBody } from "./DescribeGlobalDatabaseNetworksResponseBody";
export declare class DescribeGlobalDatabaseNetworksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGlobalDatabaseNetworksResponseBody;
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
