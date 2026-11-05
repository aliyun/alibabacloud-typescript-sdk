import * as $dara from '@darabonba/typescript';
import { GetWorkspaceAgenticFsMountRamAuthorizeUrlResponseBody } from "./GetWorkspaceAgenticFsMountRamAuthorizeUrlResponseBody";
export declare class GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetWorkspaceAgenticFsMountRamAuthorizeUrlResponseBody;
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
