import * as $dara from '@darabonba/typescript';
import { ModifyRCVClusterResponseBody } from "./ModifyRcvclusterResponseBody";
export declare class ModifyRCVClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCVClusterResponseBody;
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
