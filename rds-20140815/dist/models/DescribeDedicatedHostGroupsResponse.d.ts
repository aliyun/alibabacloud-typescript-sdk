import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostGroupsResponseBody } from "./DescribeDedicatedHostGroupsResponseBody";
export declare class DescribeDedicatedHostGroupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDedicatedHostGroupsResponseBody;
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
