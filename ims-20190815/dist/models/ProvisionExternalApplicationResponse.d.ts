import * as $dara from '@darabonba/typescript';
import { ProvisionExternalApplicationResponseBody } from "./ProvisionExternalApplicationResponseBody";
export declare class ProvisionExternalApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ProvisionExternalApplicationResponseBody;
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
