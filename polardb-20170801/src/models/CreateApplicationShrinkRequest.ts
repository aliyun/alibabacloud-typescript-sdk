// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequestTag extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of an existing model operator instance to associate. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * The AgenticDB branch specification.
   * 
   * @example
   * {"DBClusterId":"pagc-2zea920mcvd5o87","TenantId":"t-cfc2d7df0e59439681f0087f51","ProjectId":"proj-d7849d0050664c758af795d468","BranchId":"br-9054b3b7649e4c0d977bd0df37","ForkFromBranch":true,"ForkFromApplicationId":"pa-source"}
   */
  agenticDBBranchSpecShrink?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - supabase: Set this value to create a managed Supabase application.
   * - raycluster: Set this value to create a managed Ray Cluster application.
   * - polarclaw: Set this value to create a managed PolarClaw application.
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
   * 
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
   * The authentication service provider.
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
   * Specifies whether to enable automatic creation of an elastic IP address (EIP) and attach it to the instance. This is equivalent to associate with an EIP.
   * 
   * @example
   * qwen3-max
   */
  autoAllocatePublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of a cold storage Polarlakebase instance. Valid values:
   * * false (default): Automatic creation is disabled.
   * * true: Automatic creation is enabled.
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
   * The list of user-defined application subcomponents.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The instance ID of the PolarDB instance on which the application depends.
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
   * The list of expected DNAT entries for NAT mapping. Specify this parameter together with VpcNatGatewayId. This parameter can be left empty, which indicates that no DNAT entries are created.
   */
  dnatEntriesShrink?: string;
  /**
   * @remarks
   * The DNAT-dedicated NAT IP address that has been allocated (separate from the SNAT IP address) for NAT mapping. The IP address must belong to the specified gateway and be in an available state. The vSwitch of the gateway must belong to a primary CIDR block that is reachable from the office network. Specify this parameter together with VpcNatGatewayId. Prerequisite: An SNAT entry has been bound to the vSwitch where the application resides.
   * 
   * @example
   * 10.64.0.10
   */
  dnatIpAddress?: string;
  /**
   * @remarks
   * Default value: `false`. If you set this parameter to `true`, only parameter and resource validation is performed without actually creating the resource.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of user-defined service endpoints. By default, a VPC endpoint is created.
   */
  endpointsShrink?: string;
  /**
   * @remarks
   * Required for knowledge applications.
   */
  knowledgeApplicationSpecShrink?: string;
  /**
   * @remarks
   * Required for mem0 applications.
   */
  memApplicationSpecShrink?: string;
  /**
   * @remarks
   * The model API. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @remarks
   * The model API key. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @remarks
   * The model base URL. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @remarks
   * The model source. Valid values:
   * 
   * * bailian: Alibaba Cloud Model Studio model.
   * * custom: Custom model.
   * * maas: PolarDB model operator.
   * 
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @remarks
   * The model name. This parameter takes effect only when ApplicationType is set to polarclaw.
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
   * The billing type.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type (yearly or monthly).
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The instance ID of the Polarlakebase cold storage or high-performance edition. Default value: empty. If specified, the corresponding storage is mounted to the application.
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
   * The region. Default value: the region of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-********************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the IP whitelist group. Default value: `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP whitelist. If you do not specify this parameter, the default value is `127.0.0.1`.
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
   * The vSwitch. Default value: the vSwitch in the primary zone of the instance.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-********************
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC NAT gateway ID for NAT mapping. If specified, NAT mapping is enabled when the instance is created. The NAT gateway must be in the same VPC as the application, use the private network type (intranet), and be in an active state.
   * 
   * @example
   * ngw-xxx
   */
  vpcNatGatewayId?: string;
  /**
   * @remarks
   * The zone. Default value: the primary zone of the instance.
   * 
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
      agenticDBBranchSpecShrink: 'AgenticDBBranchSpec',
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      authProvider: 'AuthProvider',
      authProviderConfig: 'AuthProviderConfig',
      autoAllocatePublicEip: 'AutoAllocatePublicEip',
      autoCreatePolarFs: 'AutoCreatePolarFs',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      componentsShrink: 'Components',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      dnatEntriesShrink: 'DnatEntries',
      dnatIpAddress: 'DnatIpAddress',
      dryRun: 'DryRun',
      endpointsShrink: 'Endpoints',
      knowledgeApplicationSpecShrink: 'KnowledgeApplicationSpec',
      memApplicationSpecShrink: 'MemApplicationSpec',
      modelApi: 'ModelApi',
      modelApiKey: 'ModelApiKey',
      modelBaseUrl: 'ModelBaseUrl',
      modelFrom: 'ModelFrom',
      modelName: 'ModelName',
      parametersShrink: 'Parameters',
      payType: 'PayType',
      period: 'Period',
      polarFSInstanceId: 'PolarFSInstanceId',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      skillTemplateId: 'SkillTemplateId',
      storagesShrink: 'Storages',
      tag: 'Tag',
      targetVersion: 'TargetVersion',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcNatGatewayId: 'VpcNatGatewayId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDBClusterId: 'string',
      agenticDBBranchSpecShrink: 'string',
      applicationType: 'string',
      architecture: 'string',
      authProvider: 'string',
      authProviderConfig: 'string',
      autoAllocatePublicEip: 'boolean',
      autoCreatePolarFs: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      componentsShrink: 'string',
      DBClusterId: 'string',
      description: 'string',
      dnatEntriesShrink: 'string',
      dnatIpAddress: 'string',
      dryRun: 'boolean',
      endpointsShrink: 'string',
      knowledgeApplicationSpecShrink: 'string',
      memApplicationSpecShrink: 'string',
      modelApi: 'string',
      modelApiKey: 'string',
      modelBaseUrl: 'string',
      modelFrom: 'string',
      modelName: 'string',
      parametersShrink: 'string',
      payType: 'string',
      period: 'string',
      polarFSInstanceId: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      securityIPArrayName: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      skillTemplateId: 'string',
      storagesShrink: 'string',
      tag: { 'type': 'array', 'itemType': CreateApplicationShrinkRequestTag },
      targetVersion: 'string',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcNatGatewayId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

