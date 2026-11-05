import * as $dara from '@darabonba/typescript';
export declare class UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
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
export declare class UpdateWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is still in progress, and UpdateFailed indicates that the current change failed. This parameter only controls whether the latest versions of managed and custom agents use the public egress of the platform. It does not control fixed historical versions, model or MCP proxy egress, or the public egress of the user VPC.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * Returns the target configuration value. Updating indicates that the change is in progress, and UpdateFailed indicates that the change failed. After this feature is disabled, the public ingress for all agent endpoints in the workspace is closed. After this feature is re-enabled, the original public ingress is restored. INNER_DIRECT and user VPC ingress are not affected. Collaboration and Element Web ingress are not controlled by this parameter.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The VPC network configuration of the user.
     */
    vpc?: UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc;
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
export declare class UpdateWorkspaceResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The authorization status of OSS storage.
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
     * The name of the workspace.
     *
     * @example
     * production-agents-v2
     */
    name?: string;
    /**
     * @remarks
     * The network configuration of the workspace.
     */
    networkConfiguration?: UpdateWorkspaceResponseBodyDataNetworkConfiguration;
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
     * The status of the workspace. Valid values: Initializing, Initialized, Deleting, and Deleted.
     *
     * @example
     * Initialized
     */
    status?: string;
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
     * The ID of the workspace.
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
export declare class UpdateWorkspaceResponseBody extends $dara.Model {
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
     * The details of the updated workspace.
     */
    data?: UpdateWorkspaceResponseBodyData;
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
     * The ID of the request.
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
