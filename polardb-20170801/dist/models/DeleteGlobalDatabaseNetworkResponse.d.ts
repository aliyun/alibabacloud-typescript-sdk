import * as $dara from '@darabonba/typescript';
import { DeleteGlobalDatabaseNetworkResponseBody } from "./DeleteGlobalDatabaseNetworkResponseBody";
export declare class DeleteGlobalDatabaseNetworkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteGlobalDatabaseNetworkResponseBody;
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
