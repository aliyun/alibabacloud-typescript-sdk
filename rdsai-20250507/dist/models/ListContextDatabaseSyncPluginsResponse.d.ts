import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncPluginsResponseBody } from "./ListContextDatabaseSyncPluginsResponseBody";
export declare class ListContextDatabaseSyncPluginsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncPluginsResponseBody;
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
