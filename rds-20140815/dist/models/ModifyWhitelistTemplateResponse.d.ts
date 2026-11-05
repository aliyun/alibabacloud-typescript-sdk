import * as $dara from '@darabonba/typescript';
import { ModifyWhitelistTemplateResponseBody } from "./ModifyWhitelistTemplateResponseBody";
export declare class ModifyWhitelistTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyWhitelistTemplateResponseBody;
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
