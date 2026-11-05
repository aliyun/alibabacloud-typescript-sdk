import * as $dara from '@darabonba/typescript';
import { ResetGlobalDatabaseNetworkResponseBody } from "./ResetGlobalDatabaseNetworkResponseBody";
export declare class ResetGlobalDatabaseNetworkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetGlobalDatabaseNetworkResponseBody;
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
