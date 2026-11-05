import * as $dara from '@darabonba/typescript';
import { CheckCloudResourceAuthorizedResponseBody } from "./CheckCloudResourceAuthorizedResponseBody";
export declare class CheckCloudResourceAuthorizedResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckCloudResourceAuthorizedResponseBody;
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
