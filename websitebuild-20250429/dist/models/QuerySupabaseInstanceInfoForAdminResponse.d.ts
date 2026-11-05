import * as $dara from '@darabonba/typescript';
import { QuerySupabaseInstanceInfoForAdminResponseBody } from "./QuerySupabaseInstanceInfoForAdminResponseBody";
export declare class QuerySupabaseInstanceInfoForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QuerySupabaseInstanceInfoForAdminResponseBody;
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
