import * as $dara from '@darabonba/typescript';
import { GetAppTemplateResponseBody } from "./GetAppTemplateResponseBody";
export declare class GetAppTemplateResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppTemplateResponseBody;
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
