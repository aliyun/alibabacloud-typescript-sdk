import * as $dara from '@darabonba/typescript';
import { CreateAppSecretResponseBody } from "./CreateAppSecretResponseBody";
export declare class CreateAppSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAppSecretResponseBody;
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
