import * as $dara from '@darabonba/typescript';
import { SetAppDomainCertificateResponseBody } from "./SetAppDomainCertificateResponseBody";
export declare class SetAppDomainCertificateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetAppDomainCertificateResponseBody;
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
