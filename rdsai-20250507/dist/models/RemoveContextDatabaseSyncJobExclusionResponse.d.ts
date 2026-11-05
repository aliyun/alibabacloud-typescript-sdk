import * as $dara from '@darabonba/typescript';
import { RemoveContextDatabaseSyncJobExclusionResponseBody } from "./RemoveContextDatabaseSyncJobExclusionResponseBody";
export declare class RemoveContextDatabaseSyncJobExclusionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveContextDatabaseSyncJobExclusionResponseBody;
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
