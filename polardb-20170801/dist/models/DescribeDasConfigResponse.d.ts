import * as $dara from '@darabonba/typescript';
import { DescribeDasConfigResponseBody } from "./DescribeDasConfigResponseBody";
export declare class DescribeDasConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDasConfigResponseBody;
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
