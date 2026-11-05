import * as $dara from '@darabonba/typescript';
import { GetAppSupabaseSecretsResponseBody } from "./GetAppSupabaseSecretsResponseBody";
export declare class GetAppSupabaseSecretsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSupabaseSecretsResponseBody;
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
