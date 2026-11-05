import * as $dara from '@darabonba/typescript';
import { ProvisionApplicationResponseBody } from "./ProvisionApplicationResponseBody";
export declare class ProvisionApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ProvisionApplicationResponseBody;
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
