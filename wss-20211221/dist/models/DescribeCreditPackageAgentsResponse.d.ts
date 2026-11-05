import * as $dara from '@darabonba/typescript';
import { DescribeCreditPackageAgentsResponseBody } from "./DescribeCreditPackageAgentsResponseBody";
export declare class DescribeCreditPackageAgentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCreditPackageAgentsResponseBody;
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
