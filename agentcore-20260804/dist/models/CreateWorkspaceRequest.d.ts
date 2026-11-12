import * as $dara from '@darabonba/typescript';
export declare class CreateWorkspaceRequestBodyNetworkConfigurationVpc extends $dara.Model {
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
     * The list of vSwitch IDs. When the VPC network is enabled, at least one vSwitch must be included, and all vSwitches must belong to the VPC specified by VpcId.
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
export declare class CreateWorkspaceRequestBodyNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow public egress access through the platform. If not specified, this feature is enabled by default. This parameter only controls whether the latest versions of managed and custom agents use the platform public egress. It does not control fixed historical versions, model or MCP proxy egress, or the public egress of the user VPC.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * Specifies whether to allow public ingress access. If not specified, this feature is enabled by default. If disabled, the public ingress endpoints of all agent endpoints in the workspace are closed. If re-enabled, the original public ingress endpoints are restored. INNER_DIRECT and user VPC ingress endpoints are not affected. Collaboration and Element Web ingress endpoints are not controlled by this parameter.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The network configuration of the user VPC.
     */
    vpc?: CreateWorkspaceRequestBodyNetworkConfigurationVpc;
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
export declare class CreateWorkspaceRequestBody extends $dara.Model {
    /**
     * @remarks
     * If specified, the workspace is directly bound to this AgentSpace, and a new one is not created. The CMS workspace to which it belongs is determined by the server reverse lookup result, and CmsWorkspace validation is not required. When the workspace is deleted, it is only unbound, and the AgentSpace is not deleted. The value must match the current account and region, and the reverse lookup must return the associated CMS workspace. Otherwise, InvalidParameter is returned.
     *
     * @example
     * my-agent-space
     */
    agentSpace?: string;
    /**
     * @remarks
     * If specified, the workspace is bound to this CMS workspace, and the platform does not create a new one. When the workspace is deleted, it is only unbound, and the CMS workspace is not deleted. The value must match the current account and region. Otherwise, InvalidParameter is returned.
     *
     * @example
     * my-cms-workspace
     */
    cmsWorkspace?: string;
    /**
     * @remarks
     * The name of the workspace.
     *
     * This parameter is required.
     *
     * @example
     * production-agents
     */
    name?: string;
    /**
     * @remarks
     * The network configuration of the workspace.
     */
    networkConfiguration?: CreateWorkspaceRequestBodyNetworkConfiguration;
    /**
     * @remarks
     * The storage type of the workspace. PLATFORM indicates platform-managed storage, and PRIVATE indicates user private OSS storage.
     *
     * @example
     * PRIVATE
     */
    storageType?: string;
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
export declare class CreateWorkspaceRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for creating a workspace.
     */
    body?: CreateWorkspaceRequestBody;
    /**
     * @remarks
     * The client idempotency token.
     *
     * @example
     * workspace-create-20260805-001
     */
    clientToken?: string;
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
