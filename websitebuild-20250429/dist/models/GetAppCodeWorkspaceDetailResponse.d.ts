import * as $dara from '@darabonba/typescript';
import { GetAppCodeWorkspaceDetailResponseBody } from "./GetAppCodeWorkspaceDetailResponseBody";
export declare class GetAppCodeWorkspaceDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAppCodeWorkspaceDetailResponseBody;
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
