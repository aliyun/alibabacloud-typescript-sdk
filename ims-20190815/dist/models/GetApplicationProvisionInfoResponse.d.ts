import * as $dara from '@darabonba/typescript';
import { GetApplicationProvisionInfoResponseBody } from "./GetApplicationProvisionInfoResponseBody";
export declare class GetApplicationProvisionInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetApplicationProvisionInfoResponseBody;
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
