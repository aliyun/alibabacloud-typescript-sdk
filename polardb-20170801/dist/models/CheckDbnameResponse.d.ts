import * as $dara from '@darabonba/typescript';
import { CheckDBNameResponseBody } from "./CheckDbnameResponseBody";
export declare class CheckDBNameResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckDBNameResponseBody;
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
