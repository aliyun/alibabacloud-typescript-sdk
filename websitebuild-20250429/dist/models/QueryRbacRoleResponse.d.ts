import * as $dara from '@darabonba/typescript';
import { QueryRbacRoleResponseBody } from "./QueryRbacRoleResponseBody";
export declare class QueryRbacRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: QueryRbacRoleResponseBody;
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
