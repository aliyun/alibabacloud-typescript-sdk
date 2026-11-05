import * as $dara from '@darabonba/typescript';
export declare class UpdateWorkspaceRequestBodyNetworkConfigurationVpc extends $dara.Model {
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
     * The list of vSwitch IDs. When the VPC network is enabled, the list must contain at least one vSwitch, and all vSwitches must belong to the VPC specified by VpcId.
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
export declare class UpdateWorkspaceRequestBodyNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow public egress access from the platform. If this parameter is not specified, the original value is retained. Disabling this feature asynchronously cascades to disable the public network switch for agents. Re-enabling this feature does not automatically restore the agent switch. This parameter only controls whether the latest versions of managed and custom agents use the public egress of the platform. It does not control fixed historical versions, model or MCP proxy egress, or the public egress of the user VPC.
     *
     * @example
     * true
     */
    publicEgressEnabled?: boolean;
    /**
     * @remarks
     * Specifies whether to allow public ingress access. If this parameter is not specified, the original value is retained. This parameter can be modified together with PublicEgressEnabled and takes effect asynchronously through a unified task. After this feature is disabled, the public ingress for all agent endpoints in the workspace is closed. After this feature is re-enabled, the original public ingress is restored. INNER_DIRECT and user VPC ingress are not affected. Collaboration and Element Web ingress are not controlled by this parameter.
     *
     * @example
     * true
     */
    publicIngressEnabled?: boolean;
    /**
     * @remarks
     * The VPC network configuration of the user.
     */
    vpc?: UpdateWorkspaceRequestBodyNetworkConfigurationVpc;
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
export declare class UpdateWorkspaceRequestBody extends $dara.Model {
    /**
     * @remarks
     * The updated name of the workspace.
     *
     * @example
     * production-agents-v2
     */
    name?: string;
    /**
     * @remarks
     * The updated network configuration of the workspace.
     */
    networkConfiguration?: UpdateWorkspaceRequestBodyNetworkConfiguration;
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
export declare class UpdateWorkspaceRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating a workspace.
     */
    body?: UpdateWorkspaceRequestBody;
    /**
     * @remarks
     * The client token used to ensure idempotence.
     *
     * @example
     * workspace-update-20260805-001
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
