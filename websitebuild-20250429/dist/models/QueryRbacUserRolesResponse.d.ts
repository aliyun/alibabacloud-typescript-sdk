import * as $dara from '@darabonba/typescript';
import { QueryRbacUserRolesResponseBody } from "./QueryRbacUserRolesResponseBody";
export declare class QueryRbacUserRolesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryRbacUserRolesResponseBody;
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
