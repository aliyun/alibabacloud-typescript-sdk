import * as $dara from '@darabonba/typescript';
import { UpdateRbacOrgUnitResponseBody } from "./UpdateRbacOrgUnitResponseBody";
export declare class UpdateRbacOrgUnitResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateRbacOrgUnitResponseBody;
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
