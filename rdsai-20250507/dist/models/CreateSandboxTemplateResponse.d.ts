import * as $dara from '@darabonba/typescript';
import { CreateSandboxTemplateResponseBody } from "./CreateSandboxTemplateResponseBody";
export declare class CreateSandboxTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateSandboxTemplateResponseBody;
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
