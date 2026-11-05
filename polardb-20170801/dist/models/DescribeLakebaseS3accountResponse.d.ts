import * as $dara from '@darabonba/typescript';
import { DescribeLakebaseS3AccountResponseBody } from "./DescribeLakebaseS3accountResponseBody";
export declare class DescribeLakebaseS3AccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLakebaseS3AccountResponseBody;
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
