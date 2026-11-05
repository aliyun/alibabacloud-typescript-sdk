import * as $dara from '@darabonba/typescript';
import { CreateAgenticDBTenantResponseBody } from "./CreateAgenticDbtenantResponseBody";
export declare class CreateAgenticDBTenantResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAgenticDBTenantResponseBody;
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
