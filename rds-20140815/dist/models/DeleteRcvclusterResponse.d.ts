import * as $dara from '@darabonba/typescript';
import { DeleteRCVClusterResponseBody } from "./DeleteRcvclusterResponseBody";
export declare class DeleteRCVClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCVClusterResponseBody;
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
