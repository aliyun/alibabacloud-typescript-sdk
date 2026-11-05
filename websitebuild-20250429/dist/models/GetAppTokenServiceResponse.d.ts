import * as $dara from '@darabonba/typescript';
import { GetAppTokenServiceResponseBody } from "./GetAppTokenServiceResponseBody";
export declare class GetAppTokenServiceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppTokenServiceResponseBody;
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
