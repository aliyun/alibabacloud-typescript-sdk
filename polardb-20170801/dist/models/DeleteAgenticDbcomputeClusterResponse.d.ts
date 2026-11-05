import * as $dara from '@darabonba/typescript';
import { DeleteAgenticDBComputeClusterResponseBody } from "./DeleteAgenticDbcomputeClusterResponseBody";
export declare class DeleteAgenticDBComputeClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgenticDBComputeClusterResponseBody;
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
