import * as $dara from '@darabonba/typescript';
import { GetAppSecretResponseBody } from "./GetAppSecretResponseBody";
export declare class GetAppSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSecretResponseBody;
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
