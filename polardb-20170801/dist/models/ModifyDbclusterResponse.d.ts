import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterResponseBody } from "./ModifyDbclusterResponseBody";
export declare class ModifyDBClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterResponseBody;
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
