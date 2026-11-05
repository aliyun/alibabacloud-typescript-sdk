import * as $dara from '@darabonba/typescript';
import { ListRbacRoleHierarchyResponseBody } from "./ListRbacRoleHierarchyResponseBody";
export declare class ListRbacRoleHierarchyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListRbacRoleHierarchyResponseBody;
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
