import * as $dara from '@darabonba/typescript';
import { GetExternalApplicationResponseBody } from "./GetExternalApplicationResponseBody";
export declare class GetExternalApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetExternalApplicationResponseBody;
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
