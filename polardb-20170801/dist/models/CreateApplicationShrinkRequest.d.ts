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
     * The AgenticDB branch specifications.
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
     * xxx
     */
    authProviderConfig?: string;
    /**
     * @remarks
     * Specifies whether the automatic creation is enabled and whether to attach and associate with an EIP.
     */
    autoAllocatePublicEip?: boolean;
    /**
     * @remarks
     * Specifies whether to automatically create a Polarlakebase cold storage edition instance. Valid values:
     * * false (default): Do not automatically create the instance.
     * * true: Automatically create the instance.
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
     * Specifies whether to automatically use coupons. Valid values:
     * * true (default): Use coupons.
     * * false: Do not use coupons.
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
     * The list of expected DNAT entries for NAT mapping. This parameter must be specified together with VpcNatGatewayId. You can leave this parameter empty to indicate that no DNAT entries are created.
     */
    dnatEntriesShrink?: string;
    /**
     * @remarks
     * The dedicated NAT IP address allocated for DNAT, which is separate from the SNAT IP address. The IP address must belong to the specified gateway, be in the available state, and the vSwitch where the gateway resides must belong to a primary CIDR block reachable from the office network. This parameter must be specified together with VpcNatGatewayId. Prerequisite: An SNAT entry is associated with the vSwitch where the application resides.
     *
     * @example
     * 10.64.0.10
     */
    dnatIpAddress?: string;
    /**
     * @remarks
     * Specifies whether to perform a dry run. Default value: `false`. If you set this parameter to `true`, only parameter and resource validations are performed, and no resources are actually created.
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
     * The knowledge application specification. This parameter is required for knowledge applications.
     */
    knowledgeApplicationSpecShrink?: string;
    /**
     * @remarks
     * The Mem0 application specification. This parameter is required for mem0 applications.
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
     * The base URL of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
     *
     * @example
     * https://dashscope.aliyuncs.com/compatible-mode/v1
     */
    modelBaseUrl?: string;
    /**
     * @remarks
     * The source of the model. Valid values:
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
     * The ID of the Polarlakebase cold storage or high-performance edition instance. Default value: empty. If you specify this parameter, the corresponding storage is mounted to the application.
     *
     * Currently, only the following applications support this parameter:
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
     * The name of the IP address whitelist group. Default value: `default`.
     *
     * @example
     * default
     */
    securityIPArrayName?: string;
    /**
     * @remarks
     * The IP address whitelist. If you do not specify this parameter, the default value `127.0.0.1` is used.
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
     * The skill template ID.
     *
     * @example
     * xxx
     */
    skillTemplateId?: string;
    /**
     * @remarks
     * The list of application storages.
     *
     * @example
     * [{"StorageType":"oss","StorageInstanceId":"pfs-xxxx","EndpointId":"pe-xxxx"}]
     */
    storagesShrink?: string;
    /**
     * @remarks
     * The tag.
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
     * The subscription period.
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
     * The VPC NAT gateway ID for NAT mapping. If you specify this parameter, NAT mapping is enabled when the instance is created. The gateway must reside in the same VPC as the application, be of the private network (intranet) type, and be active.
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
