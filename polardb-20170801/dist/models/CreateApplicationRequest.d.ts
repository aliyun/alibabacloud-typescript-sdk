import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationRequestAgenticDBBranchSpec extends $dara.Model {
    /**
     * @remarks
     * The ID of the AgenticDB branch.
     *
     * @example
     * br-9054b3b7649e4c0d977bd0df37
     */
    branchId?: string;
    /**
     * @remarks
     * The ID of the AgenticDB cluster.
     *
     * @example
     * pagc-2zea920mcvd5o87
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the source application.
     *
     * @example
     * pa-source
     */
    forkFromApplicationId?: string;
    /**
     * @remarks
     * Specifies whether to create the application based on a specified AgenticDB branch.
     *
     * @example
     * true
     */
    forkFromBranch?: boolean;
    /**
     * @remarks
     * The ID of the AgenticDB project.
     *
     * @example
     * proj-d7849d0050664c758af795d468
     */
    projectId?: string;
    /**
     * @remarks
     * The ID of the AgenticDB tenant.
     *
     * @example
     * t-cfc2d7df0e59439681f0087f51
     */
    tenantId?: string;
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
export declare class CreateApplicationRequestComponents extends $dara.Model {
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
     * The maximum number of application subcomponents of the same specifications. Default value: the value of ComponentReplica. This parameter is supported only for raycluster.
     *
     * @example
     * 1
     */
    componentMaxReplica?: number;
    /**
     * @remarks
     * The number of replicas for the application subcomponent. Default value: 1.
     *
     * @example
     * 1
     */
    componentReplica?: number;
    /**
     * @remarks
     * The type of the application subcomponent.
     * Valid values for supabase:
     * - gateway
     * - backend
     * Valid values for raycluster:
     * - head
     * - worker
     * - gpuworker
     *
     * @example
     * gateway
     */
    componentType?: string;
    /**
     * @remarks
     * The upper limit for scaling the component.
     *
     * @example
     * 16
     */
    scaleMax?: string;
    /**
     * @remarks
     * The lower limit for scaling the component.
     *
     * @example
     * 1
     */
    scaleMin?: string;
    /**
     * @remarks
     * The list of security groups for the application subcomponent. Separate multiple security group IDs with commas (,).
     *
     * @example
     * sg-********************
     */
    securityGroups?: string;
    /**
     * @remarks
     * The name of the IP address whitelist group for the application subcomponent. Default value: default.
     *
     * @example
     * default
     */
    securityIPArrayName?: string;
    /**
     * @remarks
     * The IP addresses in the whitelist for the application subcomponent. Separate multiple IP addresses with commas (,).
     *
     * @example
     * 127.0.0.1
     */
    securityIPList?: string;
    /**
     * @remarks
     * The type of the IP addresses in the whitelist for the application subcomponent. Default value: ipv4.
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
export declare class CreateApplicationRequestDnatEntries extends $dara.Model {
    /**
     * @remarks
     * The frontend port. This parameter is optional. By default, the system automatically assigns a port, avoiding ports already occupied by the gateway. You can call the DescribeApplicationAttribute operation to query the assigned port.
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
export declare class CreateApplicationRequestEndpoints extends $dara.Model {
    /**
     * @remarks
     * The description of the service endpoint.
     *
     * @example
     * my_endpoint
     */
    description?: string;
    /**
     * @remarks
     * The type of the service endpoint. Set the value to Primary.
     *
     * @example
     * Primary
     */
    endpointType?: string;
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
export declare class CreateApplicationRequestKnowledgeApplicationSpec extends $dara.Model {
    /**
     * @remarks
     * The dashboard password.
     *
     * @example
     * test-dashboard-password
     */
    dashboardPassword?: string;
    /**
     * @remarks
     * The password.
     *
     * @example
     * test-user-password
     */
    dbPassword?: string;
    /**
     * @remarks
     * Required for knowledge applications. The name of the LLM model, such as qwen3-max.
     *
     * @example
     * qwen3-max
     */
    llmModel?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI embedding model.
     *
     * @example
     * pm-xxxxxx
     */
    polarAIEmbedderInstanceId?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI LLM model.
     *
     * @example
     * pm-xxxxxx
     */
    polarAILlmInstanceId?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI reranker model.
     *
     * @example
     * pm-xxxxxx
     */
    polarAIRerankerInstanceId?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI vision-language model.
     *
     * @example
     * pm-xxxxxx
     */
    polarAIVlInstanceId?: string;
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
export declare class CreateApplicationRequestMemApplicationSpec extends $dara.Model {
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
     * The password.
     *
     * @example
     * test-user-password
     */
    dbPassword?: string;
    /**
     * @remarks
     * The username.
     *
     * @example
     * test-user
     */
    dbUser?: string;
    /**
     * @remarks
     * Required for mem0 applications. The name of the embedder model, such as text-embedding-v4.
     *
     * @example
     * text-embedding-v4
     */
    embedderModel?: string;
    /**
     * @remarks
     * The vector dimensions.
     *
     * @example
     * 1024
     */
    embedderModelDimension?: number;
    /**
     * @remarks
     * The graph LLM model.
     *
     * @example
     * qwen-plus
     */
    graphLlmModel?: string;
    /**
     * @remarks
     * Required for mem0 applications. The name of the LLM model, such as qwen3-max.
     *
     * @example
     * qwen3-max
     */
    llmModel?: string;
    /**
     * @remarks
     * The memory type, such as multimodal.
     *
     * @example
     * MULTIMODAL_TEXT
     */
    memoryType?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI embedding model.
     *
     * @example
     * pm-xxx
     */
    polarAIEmbedderInstanceId?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI graph LLM model.
     *
     * @example
     * pm-xxx
     */
    polarAIGraphLlmInstanceId?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI LLM model.
     *
     * @example
     * pm-xxx
     */
    polarAILlmInstanceId?: string;
    /**
     * @remarks
     * The instance ID of the PolarAI reranker model.
     *
     * @example
     * pm-xxx
     */
    polarAIRerankerInstanceId?: string;
    /**
     * @remarks
     * The project name, which corresponds to the schema in the database where project data is stored.
     *
     * @example
     * test-project-name
     */
    projectName?: string;
    /**
     * @remarks
     * Required for mem0 applications. The name of the reranker model, such as qwen3-rerank.
     *
     * @example
     * qwen3-rerank
     */
    rerankerModel?: string;
    /**
     * @remarks
     * The number of shards.
     *
     * @example
     * 1
     */
    shard?: number;
    /**
     * @remarks
     * The name of the visual embedder model.
     *
     * @example
     * qwen3.7-text-embedding
     */
    visualEmbedderModel?: string;
    /**
     * @remarks
     * The vector dimensions of the visual embedder.
     *
     * @example
     * 2560
     */
    visualEmbedderModelDimension?: number;
    /**
     * @remarks
     * The list of modalities for the visual LLM, such as image.
     */
    visualLlmModalities?: string[];
    /**
     * @remarks
     * The name of the visual LLM model.
     *
     * @example
     * qwen3.6-flash
     */
    visualLlmModel?: string;
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
export declare class CreateApplicationRequestParameters extends $dara.Model {
    /**
     * @remarks
     * The name of the parameter.
     *
     * @example
     * secret.gateway.auth.token
     */
    parameterName?: string;
    /**
     * @remarks
     * The value of the parameter.
     *
     * @example
     * TK***
     */
    parameterValue?: string;
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
export declare class CreateApplicationRequestStorages extends $dara.Model {
    /**
     * @remarks
     * The mount path inside the container.
     *
     * @example
     * /data/container
     */
    containerMountPath?: string;
    /**
     * @remarks
     * The ID of the storage endpoint.
     *
     * @example
     * pe-xxxx
     */
    endpointId?: string;
    /**
     * @remarks
     * The mount path of the storage.
     *
     * @example
     * /data/source
     */
    mountPath?: string;
    /**
     * @remarks
     * The storage capacity.
     *
     * @example
     * 100
     */
    storageCapacity?: string;
    /**
     * @remarks
     * The access endpoint of the storage.
     *
     * @example
     * polarfs.example.com
     */
    storageEndpoint?: string;
    /**
     * @remarks
     * The ID of the storage instance.
     *
     * @example
     * pfs-xxxx
     */
    storageInstanceId?: string;
    /**
     * @remarks
     * The storage performance level.
     *
     * @example
     * PL1
     */
    storagePerformanceLevel?: string;
    /**
     * @remarks
     * The type of the storage.
     *
     * @example
     * oss
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
export declare class CreateApplicationRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * testKey
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * testValue
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
export declare class CreateApplicationRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the associated existing model operator instance. This parameter takes effect only when ApplicationType is set to polarclaw.
     *
     * @example
     * pm-xxxxxx
     */
    AIDBClusterId?: string;
    /**
     * @remarks
     * The specifications of the AgenticDB branch.
     *
     * @example
     * {"DBClusterId":"pagc-2zea920mcvd5o87","TenantId":"t-cfc2d7df0e59439681f0087f51","ProjectId":"proj-d7849d0050664c758af795d468","BranchId":"br-9054b3b7649e4c0d977bd0df37","ForkFromBranch":true,"ForkFromApplicationId":"pa-source"}
     */
    agenticDBBranchSpec?: CreateApplicationRequestAgenticDBBranchSpec;
    /**
     * @remarks
     * The ID of the AgenticDB cluster.
     *
     * @example
     * pagc-xxx
     */
    agenticDBClusterId?: string;
    /**
     * @remarks
     * The application type. Valid values:
     * - supabase: Specify this value to create a managed Supabase application.
     * - raycluster: Specify this value to create a managed Ray Cluster application.
     * - polarclaw: Specify this value to create a managed PolarClaw application.
     * - mem0: Specify this value to create a memory service application. The ApplicationId of this application type can be used in CreateApplicationPrompt. When you create this type of application, you must also configure the VPC, security group, and model or instance parameters as required.
     *
     * This parameter is required.
     *
     * @example
     * supabase
     */
    applicationType?: string;
    /**
     * @remarks
     * The CPU architecture. Valid values:
     * - x86
     *
     * This parameter is required.
     *
     * @example
     * x86
     */
    architecture?: string;
    /**
     * @remarks
     * The authentication provider.
     *
     * @example
     * feishu
     */
    authProvider?: string;
    /**
     * @remarks
     * The authentication provider configuration.
     *
     * @example
     * {"github":{"authAppId":"example-app-id","authAppSecret":"example-secret","trustedDomain":"example.com"}}
     */
    authProviderConfig?: string;
    /**
     * @remarks
     * Specifies whether automatic creation is enabled and whether to attach and associate with an EIP.
     */
    autoAllocatePublicEip?: boolean;
    /**
     * @remarks
     * Specifies whether to automatically create a Polarlakebase cold storage instance. Valid values:
     * * false: Does not automatically create the instance. This is the default value.
     * * true: Automatically creates the instance.
     *
     * @example
     * false
     */
    autoCreatePolarFs?: boolean;
    /**
     * @remarks
     * Specifies whether to enable auto-renewal.
     *
     * @example
     * true
     */
    autoRenew?: boolean;
    /**
     * @remarks
     * Specifies whether to automatically use a coupon. Valid values:
     * - true: Uses the coupon. This is the default value.
     * - false: Does not use the coupon.
     *
     * @example
     * true
     */
    autoUseCoupon?: boolean;
    /**
     * @remarks
     * The list of custom application subcomponents.
     */
    components?: CreateApplicationRequestComponents[];
    /**
     * @remarks
     * The ID of the PolarDB instance on which the application depends.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The description or remark of the application.
     *
     * @example
     * myapp
     */
    description?: string;
    /**
     * @remarks
     * The expected list of DNAT entries. This parameter must be specified together with VpcNatGatewayId. You can leave this parameter empty to indicate that no DNAT entries are created.
     */
    dnatEntries?: CreateApplicationRequestDnatEntries[];
    /**
     * @remarks
     * The dedicated NAT IP address allocated for DNAT, which is separate from the SNAT IP address. The IP address must belong to the NAT gateway, be in the available state, and the vSwitch where the gateway resides must belong to a primary CIDR block reachable from the office network. This parameter must be specified together with VpcNatGatewayId. Prerequisite: An SNAT entry is associated with the vSwitch where the application resides.
     *
     * @example
     * 10.64.0.10
     */
    dnatIpAddress?: string;
    /**
     * @remarks
     * Specifies whether to perform a dry run. Default value: false. If you set this parameter to true, only parameter and resource validations are performed, and no resources are actually created.
     *
     * @example
     * false
     */
    dryRun?: boolean;
    /**
     * @remarks
     * The list of custom service endpoints. By default, a VPC endpoint is created.
     */
    endpoints?: CreateApplicationRequestEndpoints[];
    /**
     * @remarks
     * The required parameters for knowledge applications.
     */
    knowledgeApplicationSpec?: CreateApplicationRequestKnowledgeApplicationSpec;
    /**
     * @remarks
     * The required parameters for mem0 applications.
     */
    memApplicationSpec?: CreateApplicationRequestMemApplicationSpec;
    /**
     * @remarks
     * The API of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
     *
     * @example
     * openai-completions
     */
    modelApi?: string;
    /**
     * @remarks
     * The API key of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
     *
     * @example
     * sk-xxxxxx
     */
    modelApiKey?: string;
    /**
     * @remarks
     * The endpoint of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
     *
     * @example
     * https://dashscope.aliyuncs.com/compatible-mode/v1
     */
    modelBaseUrl?: string;
    /**
     * @remarks
     * The model source. Valid values:
     * * bailian: Model Studio model.
     * * custom: Custom model.
     * * maas: PolarDB model operator.
     *
     * @example
     * bailian
     */
    modelFrom?: string;
    /**
     * @remarks
     * The name of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
     *
     * @example
     * qwen3-max
     */
    modelName?: string;
    /**
     * @remarks
     * The list of parameters.
     */
    parameters?: CreateApplicationRequestParameters[];
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
     * The subscription period unit.
     *
     * @example
     * Year
     */
    period?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase cold storage or high-performance instance. By default, this parameter is empty. If you specify this parameter, the corresponding storage is mounted to the application. This parameter is supported only for the following applications:
     * - supabase
     * - raycluster
     *
     * @example
     * pcs-********************
     */
    polarFSInstanceId?: string;
    /**
     * @remarks
     * The coupon code. If you do not specify this parameter, the default coupon is used.
     *
     * @example
     * 727xxxxxx934
     */
    promotionCode?: string;
    /**
     * @remarks
     * The region ID. Default value: the region of the instance.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-********************
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The ID of the security group.
     *
     * @example
     * sg-********************
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The name of the IP address whitelist group. Default value: default.
     *
     * @example
     * default
     */
    securityIPArrayName?: string;
    /**
     * @remarks
     * The IP address whitelist. If you do not specify this parameter, the default value 127.0.0.1 is used.
     *
     * @example
     * 127.0.0.1,172.17.0.0/24
     */
    securityIPList?: string;
    /**
     * @remarks
     * The type of the IP address.
     *
     * @example
     * ipv4
     */
    securityIPType?: string;
    /**
     * @remarks
     * The ID of the skill template.
     *
     * @example
     * pst-123456
     */
    skillTemplateId?: string;
    /**
     * @remarks
     * The list of storage resources for the application.
     *
     * @example
     * [{"StorageType":"oss","StorageInstanceId":"pfs-xxxx","EndpointId":"pe-xxxx"}]
     */
    storages?: CreateApplicationRequestStorages[];
    /**
     * @remarks
     * The tags.
     */
    tag?: CreateApplicationRequestTag[];
    /**
     * @remarks
     * The target version.
     *
     * @example
     * latest
     */
    targetVersion?: string;
    /**
     * @remarks
     * The subscription duration.
     *
     * @example
     * 1
     */
    usedTime?: string;
    /**
     * @remarks
     * The vSwitch ID. Default value: the current vSwitch in the primary zone of the instance.
     *
     * @example
     * vsw-*********************
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC).
     *
     * @example
     * vpc-********************
     */
    vpcId?: string;
    /**
     * @remarks
     * The VPC NAT gateway ID of the self-managed VPC NAT gateway for NAT mapping. If you specify this parameter, NAT mapping is enabled when the instance is created. The NAT gateway must be in the same VPC as the application, be of the private network (intranet) type, and be in the active state.
     *
     * @example
     * ngw-xxx
     */
    vpcNatGatewayId?: string;
    /**
     * @remarks
     * The zone ID. Default value: the primary zone of the instance.
     *
     * @example
     * cn-beijing-k
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
