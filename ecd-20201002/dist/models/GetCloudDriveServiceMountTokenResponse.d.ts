import * as $dara from '@darabonba/typescript';
import { GetCloudDriveServiceMountTokenResponseBody } from "./GetCloudDriveServiceMountTokenResponseBody";
export declare class GetCloudDriveServiceMountTokenResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetCloudDriveServiceMountTokenResponseBody;
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
