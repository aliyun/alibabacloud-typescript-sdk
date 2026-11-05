import * as $dara from '@darabonba/typescript';
import { DeprovisionExternalApplicationResponseBody } from "./DeprovisionExternalApplicationResponseBody";
export declare class DeprovisionExternalApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeprovisionExternalApplicationResponseBody;
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
