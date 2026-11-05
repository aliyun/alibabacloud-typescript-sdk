import * as $dara from '@darabonba/typescript';
import { GetCreateLogoTaskResponseBody } from "./GetCreateLogoTaskResponseBody";
export declare class GetCreateLogoTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetCreateLogoTaskResponseBody;
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
