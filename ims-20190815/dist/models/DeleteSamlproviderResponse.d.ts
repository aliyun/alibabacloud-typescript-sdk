import * as $dara from '@darabonba/typescript';
import { DeleteSAMLProviderResponseBody } from "./DeleteSamlproviderResponseBody";
export declare class DeleteSAMLProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteSAMLProviderResponseBody;
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
