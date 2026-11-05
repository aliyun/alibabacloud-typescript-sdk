import * as $dara from '@darabonba/typescript';
import { DescribeColdStorageInstanceResponseBody } from "./DescribeColdStorageInstanceResponseBody";
export declare class DescribeColdStorageInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeColdStorageInstanceResponseBody;
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
