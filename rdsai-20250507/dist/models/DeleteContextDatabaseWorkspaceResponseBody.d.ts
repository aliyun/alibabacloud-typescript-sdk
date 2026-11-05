import * as $dara from '@darabonba/typescript';
export declare class DeleteContextDatabaseWorkspaceResponseBody extends $dara.Model {
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
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The workspace status. The value is fixed as Deleted.
     *
     * @example
     * Deleted
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
     * The ID of the deleted workspace.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
    /**
     * @remarks
     * The name of the deleted workspace.
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
