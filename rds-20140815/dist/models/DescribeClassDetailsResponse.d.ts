import * as $dara from '@darabonba/typescript';
import { DescribeClassDetailsResponseBody } from "./DescribeClassDetailsResponseBody";
export declare class DescribeClassDetailsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeClassDetailsResponseBody;
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
