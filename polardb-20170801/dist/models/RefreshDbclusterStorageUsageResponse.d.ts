import * as $dara from '@darabonba/typescript';
import { RefreshDBClusterStorageUsageResponseBody } from "./RefreshDbclusterStorageUsageResponseBody";
export declare class RefreshDBClusterStorageUsageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RefreshDBClusterStorageUsageResponseBody;
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
