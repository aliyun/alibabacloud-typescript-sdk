import * as $dara from '@darabonba/typescript';
export declare class CreateContextDatabaseWorkspaceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The plaintext API key. This key is returned only once upon creation. The caller must persist the key.
     *
     * @example
     * ctxdb-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The name of the first API key. The value is fixed to default.
     *
     * @example
     * default
     */
    apiKeyName?: string;
    /**
     * @remarks
     * The creation time in ISO 8601 format.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The ID of the first member.
     *
     * @example
     * mb-cz51tnnp8****
     */
    memberId?: string;
    /**
     * @remarks
     * The name of the first member.
     *
     * @example
     * my-member
     */
    memberName?: string;
    /**
     * @remarks
     * The permission mode that actually takes effect after the workspace is created. The value is returned as a lowercase string:
     * - `personal_compatibility`: Compatibility mode, which corresponds to the request value `compatibility`.
     * - `advanced`: Advanced permission mode.
     *
     * This field is optional. If it is not returned in the response, check the actual mode in the workspace details. Do not recreate the workspace only because this field is missing.
     *
     * @example
     * advanced
     */
    permissionMode?: string;
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
     * The role of the first member. The value is fixed to owner.
     *
     * @example
     * owner
     */
    role?: string;
    /**
     * @remarks
     * The status of the workspace. Valid values: Active (running normally) and Locked (stopped due to an overdue payment or locked due to expiration).
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The type of the workspace. Valid values: personal and enterprise.
     *
     * @example
     * personal
     */
    type?: string;
    /**
     * @remarks
     * The ID of the newly created workspace.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
    /**
     * @remarks
     * The name of the workspace.
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
