import * as $dara from '@darabonba/typescript';
import { DescribeLicenseOrdersResponseBody } from "./DescribeLicenseOrdersResponseBody";
export declare class DescribeLicenseOrdersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLicenseOrdersResponseBody;
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
