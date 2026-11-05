import * as $dara from '@darabonba/typescript';
import { GetAppInstanceResponseBody } from "./GetAppInstanceResponseBody";
export declare class GetAppInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppInstanceResponseBody;
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
