import * as $dara from '@darabonba/typescript';
export declare class InstallWorkspacePluginRequestBodyConfigNetworkInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable Internet access. If set to true and no VPC is specified, PUB_NET is used. If set to true and a VPC is specified, PRIVATE_PUBNET is used. If only a VPC is specified, PRIVATE_NET is used. At least one of Internet access and VPC must be configured.
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
     * Explicitly controls whether the collaboration plugin uses the VPC network. If set to false, vpcId and vSwitchIds are ignored. If set to true, you must provide both vpcId and at least two vSwitchIds.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of vSwitch IDs. The collaboration plugin requires that the vSwitches cover at least two different zones, and all vSwitches must belong to the VPC specified by vpcId.
     *
     * This parameter is required.
     */
    vSwitchIds?: string[];
    /**
     * @remarks
     * The user VPC ID.
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
     * Specifies whether to allow public network access for collaboration components. This configuration only controls public network access capabilities and does not expose component services to the public network.
     */
    internet?: InstallWorkspacePluginRequestBodyConfigNetworkInternet;
    /**
     * @remarks
     * The user VPC and vSwitch list used for deploying the collaboration plugin. The zones corresponding to the vSwitches are queried by the server, and users do not need to pass in Zones.
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
     * The network configuration used by the collaboration plugin. If not specified, the server uses the existing network configuration of the workspace.
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
     * The plugin-specific configuration. The configuration structure is determined by pluginName. Currently, the collaboration plugin supports network.
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
     * The request body for installing a plugin.
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
