import * as $dara from '@darabonba/typescript';
import { GetWorkspaceAcrRamAuthorizeUrlResponseBody } from "./GetWorkspaceAcrRamAuthorizeUrlResponseBody";
export declare class GetWorkspaceAcrRamAuthorizeUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetWorkspaceAcrRamAuthorizeUrlResponseBody;
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
