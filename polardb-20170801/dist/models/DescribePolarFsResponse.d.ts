import * as $dara from '@darabonba/typescript';
import { DescribePolarFsResponseBody } from "./DescribePolarFsResponseBody";
export declare class DescribePolarFsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarFsResponseBody;
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
