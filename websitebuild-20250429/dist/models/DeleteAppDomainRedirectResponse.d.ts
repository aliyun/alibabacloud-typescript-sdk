import * as $dara from '@darabonba/typescript';
import { DeleteAppDomainRedirectResponseBody } from "./DeleteAppDomainRedirectResponseBody";
export declare class DeleteAppDomainRedirectResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppDomainRedirectResponseBody;
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
