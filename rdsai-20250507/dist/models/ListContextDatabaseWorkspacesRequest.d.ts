import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseWorkspacesRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries per page.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token.
     *
     * @example
     * (null)
     */
    nextToken?: string;
    /**
     * @remarks
     * The status used to filter results. Valid values: Active and Locked.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The ID used to filter results. Only the workspace that matches this ID is returned.
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
