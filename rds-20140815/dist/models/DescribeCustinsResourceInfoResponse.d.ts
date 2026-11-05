import * as $dara from '@darabonba/typescript';
import { DescribeCustinsResourceInfoResponseBody } from "./DescribeCustinsResourceInfoResponseBody";
export declare class DescribeCustinsResourceInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCustinsResourceInfoResponseBody;
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
