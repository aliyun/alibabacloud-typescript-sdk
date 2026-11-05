import * as $dara from '@darabonba/typescript';
import { ListRbacPermissionsResponseBody } from "./ListRbacPermissionsResponseBody";
export declare class ListRbacPermissionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListRbacPermissionsResponseBody;
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
