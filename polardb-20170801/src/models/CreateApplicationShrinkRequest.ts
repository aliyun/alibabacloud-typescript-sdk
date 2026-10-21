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
   * - supabase: Pass this value to create a managed Supabase application.
   * - raycluster: Pass this value to create a managed Ray Cluster application.
   * - polarclaw: Pass this value to create a managed PolarClaw application.
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
   * The configuration of the authentication provider.
   * 
   * @example
   * xxx
   */
  authProviderConfig?: string;
  /**
   * @remarks
   * Specifies whether to automatically create and attach an EIP.
   */
  autoAllocatePublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether the automatic creation of a Polarlakebase cold storage instance is enabled. Valid values:
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
   * The PolarDB instance ID that the application depends on.
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
   * The list of expected DNAT entries for NAT mapping. Specify this parameter together with VpcNatGatewayId. This parameter can be left empty, which indicates that no DNAT entries are created.
   */
  dnatEntriesShrink?: string;
  /**
   * @remarks
   * The dedicated NAT IP address allocated for DNAT, which is separate from the SNAT IP address. The IP address must belong to the NAT gateway, be in the available state, and the vSwitch where the gateway resides must belong to a primary CIDR block reachable from the office network. Specify this parameter together with VpcNatGatewayId. Prerequisite: An SNAT entry is bound to the vSwitch where the application resides.
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
   * The Polarlakebase cold storage or high-performance instance ID. Default value: empty. If you specify this parameter, the corresponding storage is mounted to the application.
   * Currently, only the following applications are supported:
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
   * The ID of the skill template.
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
   * The VPC NAT gateway ID for NAT mapping. If you specify this parameter, NAT mapping is enabled when the instance is created. The NAT gateway must be in the same VPC as the application, be of the private network type, and be in the active state.
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
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
      agenticDBBranchSpecShrink: 'AgenticDBBranchSpec',
      agenticDBClusterId: 'AgenticDBClusterId',
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
      agenticDBClusterId: 'string',
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

