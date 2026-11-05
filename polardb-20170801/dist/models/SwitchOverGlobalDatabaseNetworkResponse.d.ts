import * as $dara from '@darabonba/typescript';
import { SwitchOverGlobalDatabaseNetworkResponseBody } from "./SwitchOverGlobalDatabaseNetworkResponseBody";
export declare class SwitchOverGlobalDatabaseNetworkResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchOverGlobalDatabaseNetworkResponseBody;
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
