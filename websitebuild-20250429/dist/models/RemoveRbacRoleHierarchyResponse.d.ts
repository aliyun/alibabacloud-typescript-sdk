import * as $dara from '@darabonba/typescript';
import { RemoveRbacRoleHierarchyResponseBody } from "./RemoveRbacRoleHierarchyResponseBody";
export declare class RemoveRbacRoleHierarchyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveRbacRoleHierarchyResponseBody;
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
