import * as $dara from '@darabonba/typescript';
import { GetDefaultDomainResponseBody } from "./GetDefaultDomainResponseBody";
export declare class GetDefaultDomainResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetDefaultDomainResponseBody;
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
