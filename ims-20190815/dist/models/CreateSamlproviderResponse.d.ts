import * as $dara from '@darabonba/typescript';
import { CreateSAMLProviderResponseBody } from "./CreateSamlproviderResponseBody";
export declare class CreateSAMLProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateSAMLProviderResponseBody;
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
