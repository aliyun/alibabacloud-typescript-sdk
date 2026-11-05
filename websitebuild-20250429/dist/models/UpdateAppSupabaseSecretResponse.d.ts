import * as $dara from '@darabonba/typescript';
import { UpdateAppSupabaseSecretResponseBody } from "./UpdateAppSupabaseSecretResponseBody";
export declare class UpdateAppSupabaseSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppSupabaseSecretResponseBody;
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
