import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseWorkspacesResponseBodyWorkspaces extends $dara.Model {
    /**
     * @remarks
     * The time when the workspace was created, in ISO 8601 format.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The workspace status.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The workspace type.
     *
     * @example
     * personal
     */
    type?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
    /**
     * @remarks
     * The workspace name.
     *
     * @example
     * my-workspace
     */
    workspaceName?: string;
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
export declare class ListContextDatabaseWorkspacesResponseBody extends $dara.Model {
    /**
     * @remarks
     * This field is empty.
     *
     * @example
     * (null)
     */
    maxResults?: number;
    /**
     * @remarks
     * This field is empty.
     *
     * @example
     * (null)
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The list of workspaces.
     */
    workspaces?: ListContextDatabaseWorkspacesResponseBodyWorkspaces[];
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
