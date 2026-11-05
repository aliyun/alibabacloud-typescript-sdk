import * as $dara from '@darabonba/typescript';
import { GetAccessKeyLastUsedResponseBody } from "./GetAccessKeyLastUsedResponseBody";
export declare class GetAccessKeyLastUsedResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccessKeyLastUsedResponseBody;
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
