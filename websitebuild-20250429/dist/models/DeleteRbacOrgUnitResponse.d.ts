import * as $dara from '@darabonba/typescript';
import { DeleteRbacOrgUnitResponseBody } from "./DeleteRbacOrgUnitResponseBody";
export declare class DeleteRbacOrgUnitResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRbacOrgUnitResponseBody;
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
