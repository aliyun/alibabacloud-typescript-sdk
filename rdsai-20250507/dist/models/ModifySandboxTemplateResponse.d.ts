import * as $dara from '@darabonba/typescript';
import { ModifySandboxTemplateResponseBody } from "./ModifySandboxTemplateResponseBody";
export declare class ModifySandboxTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifySandboxTemplateResponseBody;
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
