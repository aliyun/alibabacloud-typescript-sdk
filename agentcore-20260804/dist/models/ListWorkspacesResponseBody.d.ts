import * as $dara from '@darabonba/typescript';
export declare class ListWorkspacesResponseBodyItemsNetworkConfigurationVpc extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the VPC network is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of vSwitch IDs.
     */
    vSwitchIds?: string[];
    /**
     * @remarks
     * The ID of the user VPC.
     *
     * @example
     * vpc-bp1234567890
     */
    vpcId?: string;
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
export declare class ListWorkspacesResponseBodyItemsNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is still being executed, and UpdateFailed indicates that the current change failed. This parameter only controls whether the latest versions of managed and custom agents use the public network egress of the platform. It does not control fixed historical versions, model or MCP proxy egresses, or the public network egress of the user VPC.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is in progress, and UpdateFailed indicates that the change failed. After this feature is disabled, the public network ingress of all agent endpoints in the workspace is closed. After it is re-enabled, the original public network ingress is restored. INNER_DIRECT and user VPC ingresses are not affected. Collaboration and Element Web ingresses are not controlled by this parameter.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The VPC network configuration of the user.
     */
    vpc?: ListWorkspacesResponseBodyItemsNetworkConfigurationVpc;
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
export declare class ListWorkspacesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The creation time. The time follows the RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
     *
     * @example
     * 2026-08-06T03:56:56Z
     */
    createTime?: string;
    /**
     * @remarks
     * The workspace name.
     *
     * @example
     * production-agents
     */
    name?: string;
    /**
     * @remarks
     * The network configuration of the workspace.
     */
    networkConfiguration?: ListWorkspacesResponseBodyItemsNetworkConfiguration;
    /**
     * @remarks
     * The ID of the region where the workspace resides.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The workspace status. Valid values: Initializing, Initialized, Deleting, and Deleted.
     *
     * @example
     * Initialized
     */
    status?: string;
    /**
     * @remarks
     * The ID of the tenant to which the workspace belongs.
     *
     * @example
     * tenant-123456
     */
    tenantId?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-123456
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
export declare class ListWorkspacesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of workspaces.
     */
    items?: ListWorkspacesResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page used in this request.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The cursor for the next page. This parameter is empty if no next page exists.
     *
     * @example
     * d29ya3NwYWNlLW9mZnNldDo0MA
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of workspaces that meet the query conditions.
     *
     * @example
     * 42
     */
    totalCount?: number;
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
