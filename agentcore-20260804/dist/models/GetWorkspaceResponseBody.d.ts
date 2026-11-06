import * as $dara from '@darabonba/typescript';
export declare class GetWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the VPC network is enabled.
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
     * The VPC ID of the user.
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
export declare class GetWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether private network ingress access is enabled for the workspace. A value of true indicates that it is enabled, and a value of false indicates that it is disabled. This setting is independent of the enabled field in the user VPC network configuration.
     *
     * @example
     * true
     */
    privateIngressEnabled?: boolean;
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is still in progress, and UpdateFailed indicates that the current change failed. This setting only controls whether the latest versions of managed and custom agents use the platform\\"s public network egress. It does not control fixed historical versions, model or MCP proxy egress, or the user VPC\\"s own public network egress.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * The public network egress IP address of the workspace.
     *
     * @example
     * 203.0.113.10
     */
    publicEgressIp?: string;
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is in progress, and UpdateFailed indicates that the change failed. When disabled, the public network ingress for all agent endpoints in the workspace is closed, and the original public network ingress is restored when re-enabled. INNER_DIRECT and user VPC ingress are not affected, and collaboration and Element Web ingress are not controlled by this setting.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The VPC network configuration of the user.
     */
    vpc?: GetWorkspaceResponseBodyDataNetworkConfigurationVpc;
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
export declare class GetWorkspaceResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The OSS storage authorization status.
     *
     * @example
     * AUTHORIZED
     */
    authorizationStatus?: string;
    /**
     * @remarks
     * The name of the private OSS bucket.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The creation time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
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
    networkConfiguration?: GetWorkspaceResponseBodyDataNetworkConfiguration;
    /**
     * @remarks
     * The region ID of the workspace.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The workspace status. Valid values: Initializing, InitializationFailed, Initialized, Deleting, and Deleted.
     *
     * @example
     * Initialized
     */
    status?: string;
    /**
     * @remarks
     * The reason for the workspace status.
     *
     * @example
     * InitializationFailed: VPC not found
     */
    statusReason?: string;
    /**
     * @remarks
     * The storage type of the workspace.
     *
     * @example
     * PRIVATE
     */
    storageType?: string;
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
export declare class GetWorkspaceResponseBody extends $dara.Model {
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
     * The workspace details.
     */
    data?: GetWorkspaceResponseBodyData;
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
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
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
