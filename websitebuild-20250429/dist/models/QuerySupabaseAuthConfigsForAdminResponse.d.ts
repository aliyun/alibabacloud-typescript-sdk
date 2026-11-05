import * as $dara from '@darabonba/typescript';
import { QuerySupabaseAuthConfigsForAdminResponseBody } from "./QuerySupabaseAuthConfigsForAdminResponseBody";
export declare class QuerySupabaseAuthConfigsForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QuerySupabaseAuthConfigsForAdminResponseBody;
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
