import * as $dara from '@darabonba/typescript';
export declare class InstallWorkspacePluginRequestBodyConfigNetworkInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable Internet access. If this parameter is set to true and no VPC is specified, PUB_NET is used. If this parameter is set to true and a VPC is specified, PRIVATE_PUBNET is used. If only a VPC is specified, PRIVATE_NET is used. You must configure at least one of Internet access and VPC access.
     *
     * @example
     * true
     */
    enabled?: boolean;
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
export declare class InstallWorkspacePluginRequestBodyConfigNetworkVpc extends $dara.Model {
    /**
     * @remarks
     * Explicitly controls whether the collaboration component uses a VPC network. If this parameter is set to false, vpcId and vSwitchIds are ignored. If this parameter is set to true, you must provide a vpcId and at least two vSwitchIds.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of vSwitch IDs. The collaboration component requires that the vSwitches cover at least two different zones, and all vSwitches must belong to the VPC specified by vpcId.
     *
     * This parameter is required.
     */
    vSwitchIds?: string[];
    /**
     * @remarks
     * The ID of the user VPC.
     *
     * This parameter is required.
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
export declare class InstallWorkspacePluginRequestBodyConfigNetwork extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the collaboration component is allowed to access the public network. This configuration only controls the public network access capability and does not expose the component service to the public network.
     */
    internet?: InstallWorkspacePluginRequestBodyConfigNetworkInternet;
    /**
     * @remarks
     * The user VPC and the list of vSwitches used to deploy the collaboration component. The zones corresponding to the vSwitches are queried by the server. You do not need to pass the Zones parameter.
     */
    vpc?: InstallWorkspacePluginRequestBodyConfigNetworkVpc;
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
export declare class InstallWorkspacePluginRequestBodyConfig extends $dara.Model {
    /**
     * @remarks
     * The network configuration used by the collaboration component. If not specified, the server uses the existing network configuration of the workspace.
     */
    network?: InstallWorkspacePluginRequestBodyConfigNetwork;
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
export declare class InstallWorkspacePluginRequestBody extends $dara.Model {
    /**
     * @remarks
     * The component-specific configuration. The configuration structure is determined by the pluginName parameter. Currently, the collaboration component supports the network configuration.
     */
    config?: InstallWorkspacePluginRequestBodyConfig;
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
export declare class InstallWorkspacePluginRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for installing the component.
     */
    body?: InstallWorkspacePluginRequestBody;
    /**
     * @remarks
     * The client idempotency token.
     *
     * @example
     * workspace-plugin-install-20260810-001
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
