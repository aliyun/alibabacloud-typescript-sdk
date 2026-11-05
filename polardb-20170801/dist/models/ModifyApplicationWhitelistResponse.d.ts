import * as $dara from '@darabonba/typescript';
import { ModifyApplicationWhitelistResponseBody } from "./ModifyApplicationWhitelistResponseBody";
export declare class ModifyApplicationWhitelistResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyApplicationWhitelistResponseBody;
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
