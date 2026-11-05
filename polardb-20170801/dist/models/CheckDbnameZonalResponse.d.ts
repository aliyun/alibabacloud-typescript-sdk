import * as $dara from '@darabonba/typescript';
import { CheckDBNameZonalResponseBody } from "./CheckDbnameZonalResponseBody";
export declare class CheckDBNameZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckDBNameZonalResponseBody;
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
