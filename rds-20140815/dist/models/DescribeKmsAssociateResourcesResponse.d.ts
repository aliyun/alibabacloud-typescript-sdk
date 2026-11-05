import * as $dara from '@darabonba/typescript';
import { DescribeKmsAssociateResourcesResponseBody } from "./DescribeKmsAssociateResourcesResponseBody";
export declare class DescribeKmsAssociateResourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKmsAssociateResourcesResponseBody;
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
