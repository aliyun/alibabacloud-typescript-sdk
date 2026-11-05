import * as $dara from '@darabonba/typescript';
import { QueryInspirationAccountDetailsResponseBody } from "./QueryInspirationAccountDetailsResponseBody";
export declare class QueryInspirationAccountDetailsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryInspirationAccountDetailsResponseBody;
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
