import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncConnectionsRequest extends $dara.Model {
    /**
     * @remarks
     * The page number. Pages start from 1.
     *
     * @example
     * 1
     */
    page?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The plug-in ID.
     *
     * @example
     * dingtalk
     */
    pluginId?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * This parameter is required.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
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
