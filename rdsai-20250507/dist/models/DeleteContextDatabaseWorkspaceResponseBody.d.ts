import * as $dara from '@darabonba/typescript';
export declare class DeleteContextDatabaseWorkspaceResponseBodyCapabilities extends $dara.Model {
    /**
     * @remarks
     * The list of operation names that the account compatibility adapter can perform. The list content does not represent read/write, member group, or access control authorization for specific resources.
     */
    executableActions?: string[];
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
export declare class DeleteContextDatabaseWorkspaceResponseBodyViewer extends $dara.Model {
    /**
     * @remarks
     * The ID of the bound workspace member in the identity information for the current request. This field is optional and has no value when bound member information is not provided.
     *
     * @example
     * member-example
     */
    boundMemberId?: string;
    /**
     * @remarks
     * The role of the bound member in the workspace, such as Owner. This field is optional and has no value when bound member role information is not provided.
     *
     * @example
     * Owner
     */
    boundMemberRole?: string;
    /**
     * @remarks
     * The status of the bound member, such as active. This field is optional and has no value when bound member status information is not provided.
     *
     * @example
     * active
     */
    boundMemberStatus?: string;
    /**
     * @remarks
     * The account type of the caller for the current request, such as customer. This field describes the caller account and does not represent the role of a workspace member.
     *
     * @example
     * customer
     */
    callerType?: string;
    /**
     * @remarks
     * The identity resolution mode for the current request. Valid values:
     * - account_compatibility: Account compatibility identity mode.
     * - bound_member: Bound member identity mode.
     *
     * The identity resolution mode and the workspace permission mode are different concepts. You cannot infer whether advanced permissions are enabled for the workspace based on this field.
     *
     * @example
     * account_compatibility
     */
    identityMode?: string;
    /**
     * @remarks
     * The ID of the selected workspace member in the account compatibility identity mode. This field is optional and has no value when no member is selected for the current request. This field and the bound member ID represent the member selection result and the binding relationship, respectively.
     *
     * @example
     * member-example
     */
    selectedMemberId?: string;
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
export declare class DeleteContextDatabaseWorkspaceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The account-level capability information for the current request. This information only indicates the operations that the account compatibility adapter can perform and does not represent resource-level authorization. This field is optional and is not returned when no account-level executable operations are provided.
     */
    capabilities?: DeleteContextDatabaseWorkspaceResponseBodyCapabilities;
    /**
     * @remarks
     * The ID of the cluster to which the workspace belongs. For shared clusters, default is returned. For dedicated clusters, the corresponding cluster ID is returned.
     *
     * @example
     * default
     */
    clusterId?: string;
    /**
     * @remarks
     * The permission mode used by the server to parse the identity of the current request. Valid values:
     * - personal_compatibility: Compatibility mode.
     * - advanced: Advanced permission mode.
     *
     * This field describes the identity context of the current request. For the actual permission mode of the workspace, refer to PermissionMode.
     *
     * @example
     * advanced
     */
    consolePermissionMode?: string;
    /**
     * @remarks
     * The creation time in ISO-8601 format.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The permission mode of the workspace. Valid values:
     * - personal_compatibility: Compatibility mode.
     * - advanced: Advanced permission mode.
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
     * The status of the workspace. This value is fixed to Deleted.
     *
     * @example
     * Deleted
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
     * The viewer identity information for the current request, including the identity resolution mode, caller account type, and member information. Member-related fields are optional.
     */
    viewer?: DeleteContextDatabaseWorkspaceResponseBodyViewer;
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
