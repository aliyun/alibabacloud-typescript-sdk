import * as $dara from '@darabonba/typescript';
import { UpdateAppSupabaseAuthConfigResponseBody } from "./UpdateAppSupabaseAuthConfigResponseBody";
export declare class UpdateAppSupabaseAuthConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAppSupabaseAuthConfigResponseBody;
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
