import * as $dara from '@darabonba/typescript';
import { AttachWhitelistTemplateToInstanceResponseBody } from "./AttachWhitelistTemplateToInstanceResponseBody";
export declare class AttachWhitelistTemplateToInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AttachWhitelistTemplateToInstanceResponseBody;
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
