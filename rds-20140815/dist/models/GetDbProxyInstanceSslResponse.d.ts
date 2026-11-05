import * as $dara from '@darabonba/typescript';
import { GetDbProxyInstanceSslResponseBody } from "./GetDbProxyInstanceSslResponseBody";
export declare class GetDbProxyInstanceSslResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetDbProxyInstanceSslResponseBody;
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
