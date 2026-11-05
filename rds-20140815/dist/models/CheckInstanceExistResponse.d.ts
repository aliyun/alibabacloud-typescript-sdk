import * as $dara from '@darabonba/typescript';
import { CheckInstanceExistResponseBody } from "./CheckInstanceExistResponseBody";
export declare class CheckInstanceExistResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckInstanceExistResponseBody;
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
