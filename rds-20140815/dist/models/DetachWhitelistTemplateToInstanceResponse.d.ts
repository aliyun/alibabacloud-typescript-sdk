import * as $dara from '@darabonba/typescript';
import { DetachWhitelistTemplateToInstanceResponseBody } from "./DetachWhitelistTemplateToInstanceResponseBody";
export declare class DetachWhitelistTemplateToInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DetachWhitelistTemplateToInstanceResponseBody;
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
