import * as $dara from '@darabonba/typescript';
import { SubmitAppSeoIndexResponseBody } from "./SubmitAppSeoIndexResponseBody";
export declare class SubmitAppSeoIndexResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SubmitAppSeoIndexResponseBody;
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
