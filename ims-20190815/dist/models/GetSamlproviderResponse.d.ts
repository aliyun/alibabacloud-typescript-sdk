import * as $dara from '@darabonba/typescript';
import { GetSAMLProviderResponseBody } from "./GetSamlproviderResponseBody";
export declare class GetSAMLProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetSAMLProviderResponseBody;
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
