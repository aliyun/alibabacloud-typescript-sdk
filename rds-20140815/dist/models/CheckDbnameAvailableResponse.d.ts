import * as $dara from '@darabonba/typescript';
import { CheckDBNameAvailableResponseBody } from "./CheckDbnameAvailableResponseBody";
export declare class CheckDBNameAvailableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckDBNameAvailableResponseBody;
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
