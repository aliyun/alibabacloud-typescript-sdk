import * as $dara from '@darabonba/typescript';
import { DeleteSecretResponseBody } from "./DeleteSecretResponseBody";
export declare class DeleteSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteSecretResponseBody;
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
