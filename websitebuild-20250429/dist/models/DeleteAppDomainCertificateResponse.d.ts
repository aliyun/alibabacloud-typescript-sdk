import * as $dara from '@darabonba/typescript';
import { DeleteAppDomainCertificateResponseBody } from "./DeleteAppDomainCertificateResponseBody";
export declare class DeleteAppDomainCertificateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppDomainCertificateResponseBody;
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
