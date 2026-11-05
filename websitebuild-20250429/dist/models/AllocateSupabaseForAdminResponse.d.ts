import * as $dara from '@darabonba/typescript';
import { AllocateSupabaseForAdminResponseBody } from "./AllocateSupabaseForAdminResponseBody";
export declare class AllocateSupabaseForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AllocateSupabaseForAdminResponseBody;
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
