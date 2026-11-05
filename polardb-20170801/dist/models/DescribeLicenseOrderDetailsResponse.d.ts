import * as $dara from '@darabonba/typescript';
import { DescribeLicenseOrderDetailsResponseBody } from "./DescribeLicenseOrderDetailsResponseBody";
export declare class DescribeLicenseOrderDetailsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLicenseOrderDetailsResponseBody;
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
