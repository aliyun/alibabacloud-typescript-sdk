import * as $dara from '@darabonba/typescript';
import { SetFingerPrintTemplateDescriptionResponseBody } from "./SetFingerPrintTemplateDescriptionResponseBody";
export declare class SetFingerPrintTemplateDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetFingerPrintTemplateDescriptionResponseBody;
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
