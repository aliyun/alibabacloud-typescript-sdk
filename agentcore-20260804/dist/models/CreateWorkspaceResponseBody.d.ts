import * as $dara from '@darabonba/typescript';
export declare class CreateWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the VPC network.
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
export declare class CreateWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is still being executed, and UpdateFailed indicates that the current change failed. This parameter only controls whether the latest versions of managed and custom agents use the public egress of the platform. It does not control fixed historical versions, model or MCP proxy egress, or the public egress of the user VPC.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is in progress, and UpdateFailed indicates that the change failed. If disabled, the public ingress for all agent endpoints in the workspace is closed, and the original public ingress is restored when re-enabled. INNER_DIRECT and user VPC ingress are not affected. Collaboration and Element Web ingress are not controlled by this parameter.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The VPC network configuration of the user.
     */
    vpc?: CreateWorkspaceResponseBodyDataNetworkConfigurationVpc;
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
export declare class CreateWorkspaceResponseBodyDataTags extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * This parameter is required.
     *
     * @example
     * environment
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * This parameter is required.
     *
     * @example
     * development
     */
    value?: string;
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
export declare class CreateWorkspaceResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The AI Registry namespace ID. This value is returned after the related resources are bound and may be empty during initialization.
     *
     * @example
     * namespace-0123456789abcdef
     *
     * **if can be null:**
     * true
     */
    aiRegistryNamespaceId?: string;
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
     * The CloudMonitor workspace ID. This value is returned after the related resources are bound and may be empty during initialization.
     *
     * @example
     * cms-ws-0123456789abcdef
     *
     * **if can be null:**
     * true
     */
    cmsWorkspaceId?: string;
    /**
     * @remarks
     * The time when the workspace was created. The time is displayed in the ISO 8601 format.
     *
     * This parameter is required.
     *
     * @example
     * 2026-08-28T10:00:00+08:00
     */
    createTime?: string;
    /**
     * @remarks
     * The name of the workspace.
     *
     * @example
     * production-agents
     */
    name?: string;
    /**
     * @remarks
     * The network configuration of the workspace.
     */
    networkConfiguration?: CreateWorkspaceResponseBodyDataNetworkConfiguration;
    /**
     * @remarks
     * The ID of the region where the workspace is located.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group to which the workspace belongs. This value may be empty if no resource group is specified.
     *
     * @example
     * rg-acfm1234567890
     *
     * **if can be null:**
     * true
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The status of the workspace.
     *
     * @example
     * Initialized
     */
    status?: string;
    /**
     * @remarks
     * The supplementary reason for the current status of the workspace. This value is used to display the specific reason when initialization fails or authorization is pending, and may be empty under normal circumstances.
     *
     * @example
     * Waiting for OSS RAM authorization
     *
     * **if can be null:**
     * true
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
     * The list of tags for the workspace. An empty array is returned if no tags are set.
     *
     * This parameter is required.
     */
    tags?: CreateWorkspaceResponseBodyDataTags[];
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
export declare class CreateWorkspaceResponseBody extends $dara.Model {
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
    data?: CreateWorkspaceResponseBodyData;
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
