import * as $dara from '@darabonba/typescript';
import { RebootDesktopsResponseBody } from "./RebootDesktopsResponseBody";
export declare class RebootDesktopsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RebootDesktopsResponseBody;
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
