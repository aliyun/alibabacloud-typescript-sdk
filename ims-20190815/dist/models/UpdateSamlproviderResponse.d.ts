import * as $dara from '@darabonba/typescript';
import { UpdateSAMLProviderResponseBody } from "./UpdateSamlproviderResponseBody";
export declare class UpdateSAMLProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateSAMLProviderResponseBody;
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
