import * as $dara from '@darabonba/typescript';
import { OperateSupabaseForAdminResponseBody } from "./OperateSupabaseForAdminResponseBody";
export declare class OperateSupabaseForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OperateSupabaseForAdminResponseBody;
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
