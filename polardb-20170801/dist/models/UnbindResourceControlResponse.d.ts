import * as $dara from '@darabonba/typescript';
import { UnbindResourceControlResponseBody } from "./UnbindResourceControlResponseBody";
export declare class UnbindResourceControlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnbindResourceControlResponseBody;
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
