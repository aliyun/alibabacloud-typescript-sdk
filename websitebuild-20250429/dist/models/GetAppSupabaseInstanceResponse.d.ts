import * as $dara from '@darabonba/typescript';
import { GetAppSupabaseInstanceResponseBody } from "./GetAppSupabaseInstanceResponseBody";
export declare class GetAppSupabaseInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppSupabaseInstanceResponseBody;
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
