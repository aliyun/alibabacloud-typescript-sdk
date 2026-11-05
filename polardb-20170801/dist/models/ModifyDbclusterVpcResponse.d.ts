import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterVpcResponseBody } from "./ModifyDbclusterVpcResponseBody";
export declare class ModifyDBClusterVpcResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterVpcResponseBody;
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
