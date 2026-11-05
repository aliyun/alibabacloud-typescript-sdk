import * as $dara from '@darabonba/typescript';
import { GetAppSupabaseAuthConfigResponseBody } from "./GetAppSupabaseAuthConfigResponseBody";
export declare class GetAppSupabaseAuthConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSupabaseAuthConfigResponseBody;
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
