import * as $dara from '@darabonba/typescript';
import { CreateRbacOrgUnitResponseBody } from "./CreateRbacOrgUnitResponseBody";
export declare class CreateRbacOrgUnitResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRbacOrgUnitResponseBody;
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
