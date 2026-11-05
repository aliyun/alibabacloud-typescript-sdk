import * as $dara from '@darabonba/typescript';
import { AddContextDatabaseSyncJobExclusionResponseBody } from "./AddContextDatabaseSyncJobExclusionResponseBody";
export declare class AddContextDatabaseSyncJobExclusionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddContextDatabaseSyncJobExclusionResponseBody;
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
