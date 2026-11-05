import * as $dara from '@darabonba/typescript';
import { GetVerificationInfoResponseBody } from "./GetVerificationInfoResponseBody";
export declare class GetVerificationInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetVerificationInfoResponseBody;
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
