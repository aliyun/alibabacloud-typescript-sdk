import * as $dara from '@darabonba/typescript';
import { DeleteAgenticDBBranchResponseBody } from "./DeleteAgenticDbbranchResponseBody";
export declare class DeleteAgenticDBBranchResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgenticDBBranchResponseBody;
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
