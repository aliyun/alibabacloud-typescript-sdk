import * as $dara from '@darabonba/typescript';
import { DeleteAppSecretResponseBody } from "./DeleteAppSecretResponseBody";
export declare class DeleteAppSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppSecretResponseBody;
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
