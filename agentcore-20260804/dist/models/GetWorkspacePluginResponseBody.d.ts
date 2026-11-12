import * as $dara from '@darabonba/typescript';
export declare class GetWorkspacePluginResponseBodyDataConfigAgentLoop extends $dara.Model {
    /**
     * @remarks
     * The name of the AgentSpace associated with the AgentLoop component.
     *
     * @example
     * agentcore-ws-123456
     */
    agentSpaceName?: string;
    /**
     * @remarks
     * The creation time of the AgentSpace, in UTC time formatted according to RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The ID of the region where the AgentSpace is located.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
export declare class GetWorkspacePluginResponseBodyDataConfigNetworkInternet extends $dara.Model {
    /**
     * @remarks
     * Indicates whether public network access is enabled.
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
export declare class GetWorkspacePluginResponseBodyDataConfigNetworkVpc extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the VPC network is currently enabled for the collaboration component.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of vSwitch IDs used for component deployment.
     */
    vSwitchIds?: string[];
    /**
     * @remarks
     * The ID of the VPC used for component deployment.
     *
     * @example
     * vpc-bp1example
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
export declare class GetWorkspacePluginResponseBodyDataConfigNetwork extends $dara.Model {
    /**
     * @remarks
     * The public network access configuration.
     */
    internet?: GetWorkspacePluginResponseBodyDataConfigNetworkInternet;
    /**
     * @remarks
     * The user VPC configuration.
     */
    vpc?: GetWorkspacePluginResponseBodyDataConfigNetworkVpc;
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
export declare class GetWorkspacePluginResponseBodyDataConfig extends $dara.Model {
    /**
     * @remarks
     * The AgentLoop component configuration.
     */
    agentLoop?: GetWorkspacePluginResponseBodyDataConfigAgentLoop;
    /**
     * @remarks
     * The network configuration of the component, including the public network access configuration and VPC configuration.
     */
    network?: GetWorkspacePluginResponseBodyDataConfigNetwork;
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
export declare class GetWorkspacePluginResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The user-configurable properties that currently take effect for the component. This field is empty when the component is not installed.
     */
    config?: GetWorkspacePluginResponseBodyDataConfig;
    /**
     * @remarks
     * Indicates whether the component is enabled. The value is true when the status is ENABLED.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The component name.
     *
     * @example
     * collaboration
     */
    pluginName?: string;
    /**
     * @remarks
     * The component status. Valid values: DISABLED, ENABLING, ENABLED, ENABLE_FAILED, DISABLING, and DISABLE_FAILED.
     *
     * @example
     * ENABLED
     */
    status?: string;
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
export declare class GetWorkspacePluginResponseBody extends $dara.Model {
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
     * The component details.
     */
    data?: GetWorkspacePluginResponseBodyData;
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
     * The response message. An error description is returned if the request fails.
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
