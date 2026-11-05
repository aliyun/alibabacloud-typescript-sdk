import * as $dara from '@darabonba/typescript';
import { DescribeSandboxTemplatesResponseBody } from "./DescribeSandboxTemplatesResponseBody";
export declare class DescribeSandboxTemplatesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSandboxTemplatesResponseBody;
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
