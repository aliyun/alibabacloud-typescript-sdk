import * as $dara from '@darabonba/typescript';
import { DeleteAgenticDBTenantResponseBody } from "./DeleteAgenticDbtenantResponseBody";
export declare class DeleteAgenticDBTenantResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgenticDBTenantResponseBody;
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
