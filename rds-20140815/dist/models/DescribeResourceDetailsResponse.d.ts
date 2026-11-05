import * as $dara from '@darabonba/typescript';
import { DescribeResourceDetailsResponseBody } from "./DescribeResourceDetailsResponseBody";
export declare class DescribeResourceDetailsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeResourceDetailsResponseBody;
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
