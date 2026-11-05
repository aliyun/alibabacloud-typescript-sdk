import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterAccessWhitelistResponseBody } from "./ModifyDbclusterAccessWhitelistResponseBody";
export declare class ModifyDBClusterAccessWhitelistResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterAccessWhitelistResponseBody;
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
