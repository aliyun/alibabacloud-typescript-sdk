import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationAttributeResponseBodyComponentsSecurityGroups extends $dara.Model {
    /**
     * @remarks
     * The network type. Valid values:
     *
     * - vpc
     *
     * @example
     * vpc
     */
    netType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The security group ID.
     *
     * @example
     * sg-*******************
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The security group name.
     *
     * @example
     * MyGroupName
     */
    securityGroupName?: string;
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
export declare class DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays extends $dara.Model {
    /**
     * @remarks
     * The name of the IP address group. Default value: `default`.
     *
     * @example
     * default
     */
    securityIPArrayName?: string;
    /**
     * @remarks
     * The tag of the IP address group.
     *
     * @example
     * mytag
     */
    securityIPArrayTag?: string;
    /**
     * @remarks
     * The whitelist IP addresses, separated by commas.
     *
     * @example
     * 127.0.0.1
     */
    securityIPList?: string;
    /**
     * @remarks
     * The network type of the whitelist IP addresses. Default value: `mix`.
     *
     * @example
     * mix
     */
    securityIPNetType?: string;
    /**
     * @remarks
     * The type of the IP address.
     *
     * @example
     * ipv4
     */
    securityIPType?: string;
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
export declare class DescribeApplicationAttributeResponseBodyComponentsTopology extends $dara.Model {
    /**
     * @remarks
     * The list of topology child node IDs for the current application subcomponent, or the list of subcomponent types of the child nodes.
     */
    children?: string[];
    /**
     * @remarks
     * The topology layer of the topology information for the current application subcomponent.
     *
     * @example
     * 0
     */
    layer?: string;
    /**
     * @remarks
     * The list of topology parent node IDs for the current application subcomponent, or the list of subcomponent types of the parent nodes.
     */
    parents?: string[];
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
export declare class DescribeApplicationAttributeResponseBodyComponents extends $dara.Model {
    /**
     * @remarks
     * The specifications of the application subcomponent.
     *
     * @example
     * polar.app.g2.medium
     */
    componentClass?: string;
    /**
     * @remarks
     * The description of the specifications for the application subcomponent.
     *
     * @example
     * 2C4GB
     */
    componentClassDescription?: string;
    /**
     * @remarks
     * The subcomponent ID.
     *
     * @example
     * pac-*******************
     */
    componentId?: string;
    /**
     * @remarks
     * The maximum number of replicas for the application subcomponent.
     *
     * @example
     * 1
     */
    componentMaxReplica?: number;
    /**
     * @remarks
     * The number of replicas for the application subcomponent.
     *
     * @example
     * 1
     */
    componentReplica?: number;
    /**
     * @remarks
     * The replica group name of the application subcomponent.
     *
     * @example
     * default
     */
    componentReplicaGroupName?: string;
    /**
     * @remarks
     * The type of the application subcomponent.
     *
     * @example
     * gateway
     */
    componentType?: string;
    /**
     * @remarks
     * The list of security groups at the subcomponent level.
     *
     * If the security groups at the subcomponent level are the same as those at the application level, this return value is omitted.
     */
    securityGroups?: DescribeApplicationAttributeResponseBodyComponentsSecurityGroups[];
    /**
     * @remarks
     * The list of whitelist IP addresses at the subcomponent level.
     *
     * If the whitelist at the subcomponent level is the same as that at the application level, this return value is omitted.
     */
    securityIPArrays?: DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays[];
    /**
     * @remarks
     * The component status. The valid values are the same as the application status.
     *
     * @example
     * Activated
     */
    status?: string;
    /**
     * @remarks
     * The topology information of the application subcomponent.
     */
    topology?: DescribeApplicationAttributeResponseBodyComponentsTopology;
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
export declare class DescribeApplicationAttributeResponseBodyDnatMappings extends $dara.Model {
    /**
     * @remarks
     * The access address in the NatIp:FrontPort format, which can be directly used in the office network.
     *
     * @example
     * 10.64.0.10:10001
     */
    accessAddress?: string;
    /**
     * @remarks
     * The backend service port.
     *
     * @example
     * 8787
     */
    backendPort?: number;
    /**
     * @remarks
     * The DNAT entry ID.
     *
     * @example
     * fwd-xxx
     */
    entryId?: string;
    /**
     * @remarks
     * The frontend port.
     *
     * @example
     * 10001
     */
    frontPort?: number;
    /**
     * @remarks
     * The port name. Valid values: webui, hermesagent, dashboard, and ssh.
     *
     * @example
     * webui
     */
    portName?: string;
    /**
     * @remarks
     * The entry status.
     *
     * @example
     * Available
     */
    status?: string;
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
export declare class DescribeApplicationAttributeResponseBodyEndpoints extends $dara.Model {
    /**
     * @remarks
     * The description of the endpoint.
     *
     * @example
     * myendpoint
     */
    description?: string;
    /**
     * @remarks
     * The domain name of the application endpoint.
     *
     * @example
     * app.example.com
     */
    domain?: string;
    /**
     * @remarks
     * The endpoint ID.
     *
     * @example
     * pa-**************
     */
    endpointId?: string;
    /**
     * @remarks
     * The IP address.
     *
     * @example
     * 172.31.95.252
     */
    IP?: string;
    /**
     * @remarks
     * The endpoint type. Valid values:
     * - Private: VPC address.
     * - Public: Internet address.
     *
     * @example
     * Private
     */
    netType?: string;
    /**
     * @remarks
     * The port.
     *
     * @example
     * 8080
     */
    port?: string;
    /**
     * @remarks
     * The port description.
     *
     * @example
     * kong_http
     */
    portDescription?: string;
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
export declare class DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore extends $dara.Model {
    /**
     * @remarks
     * The account source. Valid values: reuse_vector and existing. This parameter is returned only when the status is ENABLED.
     *
     * @example
     * existing
     */
    accountMode?: string;
    /**
     * @remarks
     * The ID of the PolarDB cluster used for session storage. This parameter is returned only when the status is ENABLED.
     *
     * @example
     * pc-xxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the session database. This parameter is returned only when the status is ENABLED.
     *
     * @example
     * contextdb_example
     */
    DBName?: string;
    /**
     * @remarks
     * The status of the session store. Valid values: DISABLED, ENABLING, ENABLED, and DISABLING.
     *
     * @example
     * ENABLED
     */
    status?: string;
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
export declare class DescribeApplicationAttributeResponseBodyMemApplicationAttribute extends $dara.Model {
    /**
     * @remarks
     * The database name.
     *
     * @example
     * test-database-name
     */
    dbName?: string;
    /**
     * @remarks
     * The embedder model name.
     *
     * @example
     * text-embedding-v4
     */
    embedderModelName?: string;
    /**
     * @remarks
     * The graph LLM model support.
     *
     * @example
     * qwen3-max
     */
    graphLlmModelName?: string;
    /**
     * @remarks
     * The LLM model name.
     *
     * @example
     * qwen3-max
     */
    llmModelName?: string;
    /**
     * @remarks
     * The active memory type.
     *
     * @example
     * MULTIMODAL_TEXT
     */
    memoryType?: string;
    /**
     * @remarks
     * Indicates whether multimodal capabilities are enabled.
     *
     * @example
     * true
     */
    multimodalEnabled?: boolean;
    /**
     * @remarks
     * The project name, which corresponds to the schema where project data is stored in the database.
     *
     * @example
     * test-project-name
     */
    projectName?: string;
    /**
     * @remarks
     * The name of the reranker model.
     *
     * @example
     * qwen3-rerank
     */
    rerankerModelName?: string;
    /**
     * @remarks
     * The Mem0 full session information storage configuration.
     */
    sessionStore?: DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore;
    /**
     * @remarks
     * The username.
     *
     * @example
     * test-user
     */
    userName?: string;
    /**
     * @remarks
     * The current dimensions of the VisualEmbedder.
     *
     * @example
     * 2560
     */
    visualEmbedderDimensions?: number;
    /**
     * @remarks
     * The current VisualEmbedder model.
     *
     * @example
     * qwen3.7-text-embedding
     */
    visualEmbedderModelName?: string;
    /**
     * @remarks
     * The currently enabled understanding modalities.
     */
    visualLlmModalities?: string[];
    /**
     * @remarks
     * The current VisualLLM model.
     *
     * @example
     * qwen3.6-flash
     */
    visualLlmModelName?: string;
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
export declare class DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding extends $dara.Model {
    /**
     * @remarks
     * The attachment effective period (UNIX timestamp).
     *
     * @example
     * 1788771141
     */
    activatedAt?: number;
    /**
     * @remarks
     * The Langfuse API key ID.
     *
     * @example
     * api-key-xxx
     */
    apiKeyId?: string;
    /**
     * @remarks
     * The ID of the binding task.
     *
     * @example
     * 387
     */
    bindingTaskId?: number;
    /**
     * @remarks
     * The ID of the Langfuse application.
     *
     * @example
     * pa-xxx
     */
    langfuseApplicationId?: string;
    /**
     * @remarks
     * The phase of the binding.
     *
     * @example
     * ACTIVE
     */
    phase?: string;
    /**
     * @remarks
     * The ID of the Langfuse project.
     *
     * @example
     * project-xxx
     */
    projectId?: string;
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
export declare class DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute extends $dara.Model {
    /**
     * @remarks
     * The Langfuse binding information.
     */
    langfuseBinding?: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding;
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
export declare class DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute extends $dara.Model {
    /**
     * @remarks
     * The authentication callback URL.
     *
     * @example
     * http://8.xxx.xxx.xxx.xxx/xxx
     */
    authCallbackURL?: string;
    /**
     * @remarks
     * The list of authentication providers for the application.
     */
    authProviders?: string[];
    /**
     * @remarks
     * The identifier of the Supabase cluster.
     *
     * @example
     * pa-**************
     */
    supabaseClusterId?: string;
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
export declare class DescribeApplicationAttributeResponseBodySecurityGroups extends $dara.Model {
    /**
     * @remarks
     * The network type. Valid values:
     *
     * - vpc
     *
     * @example
     * vpc
     */
    netType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The security group ID.
     *
     * @example
     * sg-**************
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The security group name.
     *
     * @example
     * MyGroupName
     */
    securityGroupName?: string;
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
export declare class DescribeApplicationAttributeResponseBodySecurityIPArrays extends $dara.Model {
    /**
     * @remarks
     * The name of the IP address group. Default value: `default`.
     *
     * @example
     * default
     */
    securityIPArrayName?: string;
    /**
     * @remarks
     * The tag of the IP address group.
     *
     * @example
     * mytag
     */
    securityIPArrayTag?: string;
    /**
     * @remarks
     * The whitelist IP addresses, separated by commas.
     *
     * @example
     * 127.0.0.1
     */
    securityIPList?: string;
    /**
     * @remarks
     * The network type of the whitelist IP addresses. Default value: `mix`.
     *
     * @example
     * mix
     */
    securityIPNetType?: string;
    /**
     * @remarks
     * The type of the IP address.
     *
     * @example
     * ipv4
     */
    securityIPType?: string;
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
export declare class DescribeApplicationAttributeResponseBodyStorages extends $dara.Model {
    /**
     * @remarks
     * The storage capacity.
     *
     * @example
     * 20Gi
     */
    storageCapacity?: string;
    /**
     * @remarks
     * The storage instance ID.
     *
     * @example
     * pa-**************
     */
    storageInstanceId?: string;
    /**
     * @remarks
     * The storage performance level (PL).
     *
     * @example
     * PL0
     */
    storagePerformanceLevel?: string;
    /**
     * @remarks
     * The storage type.
     *
     * @example
     * essd
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
export declare class DescribeApplicationAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The application type.
     *
     * @example
     * supabase
     */
    applicationType?: string;
    /**
     * @remarks
     * The CPU architecture. Valid values:
     * - `x86`
     *
     * @example
     * x86
     */
    architecture?: string;
    /**
     * @remarks
     * Indicates whether SNAT can be disabled.
     */
    canDisableSnat?: boolean;
    /**
     * @remarks
     * The list of subcomponents.
     */
    components?: DescribeApplicationAttributeResponseBodyComponents[];
    /**
     * @remarks
     * The creation time.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-03-25T09:37:10Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The instance ID of the PolarDB instance that the application depends on.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The description of the application.
     *
     * @example
     * myapp
     */
    description?: string;
    /**
     * @remarks
     * The list of DNAT mapping entries for NAT mapping.
     */
    dnatMappings?: DescribeApplicationAttributeResponseBodyDnatMappings[];
    /**
     * @remarks
     * The list of endpoints for the application.
     */
    endpoints?: DescribeApplicationAttributeResponseBodyEndpoints[];
    /**
     * @remarks
     * The expiration time.
     *
     * This parameter is empty when the billing method is pay-as-you-go.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-06-25T09:37:10Z
     */
    expireTime?: string;
    /**
     * @remarks
     * Indicates whether the application has expired.
     *
     * @example
     * false
     */
    expired?: boolean;
    /**
     * @remarks
     * Indicates whether the application is of the latest version.
     *
     * @example
     * true
     */
    isLatestVersion?: boolean;
    /**
     * @remarks
     * The latest version number.
     *
     * @example
     * v2026.3.13-1#20260320
     */
    latestVersion?: string;
    /**
     * @remarks
     * The lock mode. Valid values:
     *
     * - Unlock: Unlocked.
     * - Lock: Locked.
     *
     * @example
     * Unlock
     */
    lockMode?: string;
    /**
     * @remarks
     * The end time of the maintenance window.
     *
     * The time is displayed in UTC in the HH:mmZ format.
     *
     * @example
     * 19:00Z
     */
    maintainEndTime?: string;
    /**
     * @remarks
     * The start time of the maintenance window.
     *
     * The time is displayed in UTC in the HH:mmZ format.
     *
     * @example
     * 18:00Z
     */
    maintainStartTime?: string;
    /**
     * @remarks
     * The Mem0 application attributes.
     */
    memApplicationAttribute?: DescribeApplicationAttributeResponseBodyMemApplicationAttribute;
    /**
     * @remarks
     * The minor version number.
     *
     * @example
     * v2026.3.13-1#20260320
     */
    minorVersion?: string;
    /**
     * @remarks
     * The ID of the NAT gateway.
     *
     * @example
     * pc-xxx
     */
    natGatewayId?: string;
    /**
     * @remarks
     * The SNAT IP address bound to the vSwitch where the application resides. This address is from a customer-managed SNAT entry, which is discovered and returned in real time by the control plane. It is independent of the SNAT configuration of the Internet NAT gateway.
     *
     * @example
     * 10.64.0.20
     */
    natMappingSnatIpAddress?: string;
    /**
     * @remarks
     * The billing method.
     *
     * @example
     * Postpaid
     */
    payType?: string;
    /**
     * @remarks
     * The PolarClaw application attributes.
     */
    polarClawApplicationAttribute?: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute;
    /**
     * @remarks
     * The PolarClaw SaaS application attributes.
     */
    polarClawSaaSApplicationAttribute?: DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute;
    /**
     * @remarks
     * The instance ID of the PolarFS Archive or High-performance Edition.
     *
     * @example
     * pfs-**************
     */
    polarFSInstanceId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * The list of application-level security groups.
     */
    securityGroups?: DescribeApplicationAttributeResponseBodySecurityGroups[];
    /**
     * @remarks
     * The list of application-level whitelists.
     */
    securityIPArrays?: DescribeApplicationAttributeResponseBodySecurityIPArrays[];
    /**
     * @remarks
     * The Serverless type. Valid values:
     * - 2: Dynamic.
     * - 3: Stable.
     *
     * @example
     * 2
     */
    serverlessType?: string;
    /**
     * @remarks
     * The SNAT status. Valid values: on and off.
     *
     * @example
     * off
     */
    snatStatus?: string;
    /**
     * @remarks
     * The application status. Valid values:
     * - Creating: The application is being created.
     * - Activated: The application is running.
     * - Maintaining: The application is under maintenance.
     * - ClassChanging: The configurations of the application are being changed.
     * - Transing: The application is being migrated.
     * - MinorVersionUpgrading: The minor version of the application is being upgraded.
     * - NetCreating: The endpoint of the application is being created.
     * - NetDeleting: The endpoint of the application is being deleted.
     * - NetModifying: The endpoint of the application is being modified.
     * - Restarting: The application is being restarted.
     * - Locking: The application is being locked.
     * - Locked: The application is locked.
     * - Unlocking: The application is being unlocked.
     * - Deleting: The application is being deleted.
     *
     * @example
     * Activated
     */
    status?: string;
    /**
     * @remarks
     * The storage resources.
     */
    storages?: DescribeApplicationAttributeResponseBodyStorages[];
    /**
     * @remarks
     * Indicates whether an upgrade is available.
     *
     * @example
     * false
     */
    upgradeAvailable?: string;
    /**
     * @remarks
     * The VPC ID.
     *
     * @example
     * vpc-*******************
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-*******************
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The application version.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The customer-managed VPC NAT gateway ID for NAT mapping.
     *
     * @example
     * ngw-xxx
     */
    vpcNatGatewayId?: string;
    /**
     * @remarks
     * The zone.
     *
     * @example
     * cn-beijing-l
     */
    zoneId?: string;
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
