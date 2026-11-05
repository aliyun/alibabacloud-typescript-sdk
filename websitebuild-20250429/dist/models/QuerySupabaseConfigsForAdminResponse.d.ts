import * as $dara from '@darabonba/typescript';
import { QuerySupabaseConfigsForAdminResponseBody } from "./QuerySupabaseConfigsForAdminResponseBody";
export declare class QuerySupabaseConfigsForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QuerySupabaseConfigsForAdminResponseBody;
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
