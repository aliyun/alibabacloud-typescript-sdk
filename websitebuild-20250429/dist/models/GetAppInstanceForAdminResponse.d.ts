import * as $dara from '@darabonba/typescript';
import { GetAppInstanceForAdminResponseBody } from "./GetAppInstanceForAdminResponseBody";
export declare class GetAppInstanceForAdminResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppInstanceForAdminResponseBody;
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
