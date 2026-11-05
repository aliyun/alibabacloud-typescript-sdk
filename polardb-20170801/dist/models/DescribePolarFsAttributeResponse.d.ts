import * as $dara from '@darabonba/typescript';
import { DescribePolarFsAttributeResponseBody } from "./DescribePolarFsAttributeResponseBody";
export declare class DescribePolarFsAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarFsAttributeResponseBody;
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
