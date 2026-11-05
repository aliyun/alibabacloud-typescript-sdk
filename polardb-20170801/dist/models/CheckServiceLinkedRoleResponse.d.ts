import * as $dara from '@darabonba/typescript';
import { CheckServiceLinkedRoleResponseBody } from "./CheckServiceLinkedRoleResponseBody";
export declare class CheckServiceLinkedRoleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckServiceLinkedRoleResponseBody;
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
