import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterTDEResponseBody } from "./ModifyDbclusterTderesponseBody";
export declare class ModifyDBClusterTDEResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterTDEResponseBody;
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
