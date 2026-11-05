import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBody } from "./DescribePriceResponseBody";
export declare class DescribePriceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePriceResponseBody;
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
