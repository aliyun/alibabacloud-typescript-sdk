import * as $dara from '@darabonba/typescript';
export declare class UpdateContextDatabaseWorkspaceResponseBody extends $dara.Model {
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
     * The status of the workspace.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The type of the workspace.
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
     * The updated name of the workspace.
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
