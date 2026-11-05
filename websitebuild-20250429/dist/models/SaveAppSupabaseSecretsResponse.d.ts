import * as $dara from '@darabonba/typescript';
import { SaveAppSupabaseSecretsResponseBody } from "./SaveAppSupabaseSecretsResponseBody";
export declare class SaveAppSupabaseSecretsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SaveAppSupabaseSecretsResponseBody;
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
