import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBody } from "./DescribeDedicatedHostsResponseBody";
export declare class DescribeDedicatedHostsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDedicatedHostsResponseBody;
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
