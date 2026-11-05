import * as $dara from '@darabonba/typescript';
import { BindAppDomainResponseBody } from "./BindAppDomainResponseBody";
export declare class BindAppDomainResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: BindAppDomainResponseBody;
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
