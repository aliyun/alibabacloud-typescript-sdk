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
     * The list of vSwitch IDs. If the VPC network is enabled, at least one vSwitch must be included, and all vSwitches must belong to the VPC specified by VpcId.
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
     * Specifies whether to allow public outbound access from the platform. If not specified, the default value is true. This setting only controls whether the latest versions of managed and custom agents use the public outbound endpoint of the platform. It does not affect fixed historical versions, model or Model Context Protocol (MCP) proxy outbound endpoints, or the public outbound endpoint of the user VPC.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * Specifies whether to allow public inbound access. If not specified, the default value is true. If disabled, the public inbound endpoints of all agent endpoints in the workspace are closed. If re-enabled, the original public inbound endpoints are restored. INNER_DIRECT and user VPC inbound endpoints are not affected. Collaboration and Element Web inbound endpoints are not controlled by this setting.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The VPC network configuration of the user.
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
     * If specified, the workspace is directly bound to this AgentSpace without creating a new one. The associated CloudMonitor (CMS) workspace is determined by the server\\"s reverse lookup result, and CmsWorkspace validation is skipped. When the workspace is deleted, only the binding is removed, and the AgentSpace is not deleted. The value must match the current account and region, and the associated CMS workspace must be found through reverse lookup. Otherwise, InvalidParameter is returned.
     *
     * @example
     * my-agent-space
     */
    agentSpace?: string;
    /**
     * @remarks
     * If specified, the workspace is bound to this CloudMonitor (CMS) workspace without creating a new one. When the workspace is deleted, only the binding is removed, and the CMS workspace is not deleted. The value must match the current account and region. Otherwise, InvalidParameter is returned.
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
     * The storage type of the workspace. PLATFORM indicates platform-managed storage. PRIVATE indicates user-owned private Object Storage Service (OSS) storage.
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
