import * as $dara from '@darabonba/typescript';
import { DeleteFingerPrintTemplateResponseBody } from "./DeleteFingerPrintTemplateResponseBody";
export declare class DeleteFingerPrintTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteFingerPrintTemplateResponseBody;
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
