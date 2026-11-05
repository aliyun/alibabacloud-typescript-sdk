import * as $dara from '@darabonba/typescript';
import { CheckAccountNameZonalResponseBody } from "./CheckAccountNameZonalResponseBody";
export declare class CheckAccountNameZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckAccountNameZonalResponseBody;
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
