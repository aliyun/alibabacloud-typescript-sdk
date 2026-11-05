import * as $dara from '@darabonba/typescript';
import { SetFingerPrintTemplateResponseBody } from "./SetFingerPrintTemplateResponseBody";
export declare class SetFingerPrintTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetFingerPrintTemplateResponseBody;
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
