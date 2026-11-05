import * as $dara from '@darabonba/typescript';
import { CheckAccountNameAvailableResponseBody } from "./CheckAccountNameAvailableResponseBody";
export declare class CheckAccountNameAvailableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckAccountNameAvailableResponseBody;
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
