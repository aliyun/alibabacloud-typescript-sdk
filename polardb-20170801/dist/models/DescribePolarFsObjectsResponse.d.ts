import * as $dara from '@darabonba/typescript';
import { DescribePolarFsObjectsResponseBody } from "./DescribePolarFsObjectsResponseBody";
export declare class DescribePolarFsObjectsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarFsObjectsResponseBody;
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
