import * as $dara from '@darabonba/typescript';
import { DescribePolarFsMappingResponseBody } from "./DescribePolarFsMappingResponseBody";
export declare class DescribePolarFsMappingResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePolarFsMappingResponseBody;
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
