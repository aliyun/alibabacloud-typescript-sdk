import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationShrinkRequestTag extends $dara.Model {
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
export declare class CreateApplicationShrinkRequest extends $dara.Model {
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
    agenticDBBranchSpecShrink?: string;
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
    componentsShrink?: string;
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
    dnatEntriesShrink?: string;
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
    endpointsShrink?: string;
    /**
     * @remarks
     * The required parameters for knowledge applications.
     */
    knowledgeApplicationSpecShrink?: string;
    /**
     * @remarks
     * The required parameters for mem0 applications.
     */
    memApplicationSpecShrink?: string;
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
    parametersShrink?: string;
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
    storagesShrink?: string;
    /**
     * @remarks
     * The tags.
     */
    tag?: CreateApplicationShrinkRequestTag[];
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
