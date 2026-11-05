import * as $dara from '@darabonba/typescript';
import { ListRbacOrgTreeResponseBody } from "./ListRbacOrgTreeResponseBody";
export declare class ListRbacOrgTreeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListRbacOrgTreeResponseBody;
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
