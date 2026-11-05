import * as $dara from '@darabonba/typescript';
import { UnbindAppDomainResponseBody } from "./UnbindAppDomainResponseBody";
export declare class UnbindAppDomainResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UnbindAppDomainResponseBody;
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
