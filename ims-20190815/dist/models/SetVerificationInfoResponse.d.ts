import * as $dara from '@darabonba/typescript';
import { SetVerificationInfoResponseBody } from "./SetVerificationInfoResponseBody";
export declare class SetVerificationInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetVerificationInfoResponseBody;
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
