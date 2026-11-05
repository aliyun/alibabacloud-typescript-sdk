import * as $dara from '@darabonba/typescript';
import { GetAccessApplicationResponseBody } from "./GetAccessApplicationResponseBody";
export declare class GetAccessApplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccessApplicationResponseBody;
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
