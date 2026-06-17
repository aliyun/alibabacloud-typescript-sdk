// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The ID of an existing model operator instance to associate. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - supabase: Creates a managed Supabase application.
   * 
   * - raycluster: Creates a managed Ray Cluster application.
   * 
   * - polarclaw: Creates a managed PolarClaw application.
   * 
   * This parameter is required.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * The CPU architecture. Valid value:
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
   * The configuration of the authentication provider.
   * 
   * @example
   * xxx
   */
  authProviderConfig?: string;
  /**
   * @remarks
   * Specifies whether to automatically create and bind an Elastic IP Address (EIP).
   * 
   * @example
   * qwen3-max
   */
  autoAllocatePublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create a PolarFS cold storage instance. Valid values:
   * 
   * - false (default): Does not automatically create the instance.
   * 
   * - true: Automatically creates the instance.
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
   * 
   * - true (default): Uses a coupon.
   * 
   * - false: Does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A list of custom child components for the application.
   */
  componentsShrink?: string;
  /**
   * @remarks
   * The ID of the PolarDB instance that the application depends on.
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
   * The default value is `false`. If you set this parameter to `true`, the system only checks the parameters and resources without creating the actual resources.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * A list of custom server-side endpoints. By default, a VPC Endpoint is created.
   */
  endpointsShrink?: string;
  /**
   * @remarks
   * This parameter is required for knowledge applications.
   */
  knowledgeApplicationSpecShrink?: string;
  /**
   * @remarks
   * This parameter is required for mem0 applications.
   */
  memApplicationSpecShrink?: string;
  /**
   * @remarks
   * The model API. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @remarks
   * The API key for the model. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @remarks
   * The URL of the model. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @remarks
   * The source of the model. Valid values:
   * 
   * - bailian: Alibaba Cloud Model Studio model.
   * 
   * - custom: A custom model.
   * 
   * - maas: PolarDB model operator.
   * 
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @remarks
   * The name of the model. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * A list of parameters.
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
   * The subscription period type.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The ID of the PolarFileSystem (PolarFS) cold storage or high-performance instance. This parameter is empty by default. If you specify this parameter, the corresponding storage is mounted to the application.
   * 
   * This feature is currently supported only by the following applications:
   * 
   * - supabase
   * 
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
   * The region. The default value is the region of the instance.
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
   * The name of the IP address whitelist group. The default value is `default`.
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
   * The subscription duration.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The vSwitch. The default value is the current vSwitch in the primary zone of the instance.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-********************
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone. The default value is the primary zone of the instance.
   * 
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
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
      tag: 'Tag',
      targetVersion: 'TargetVersion',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDBClusterId: 'string',
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
      tag: { 'type': 'array', 'itemType': CreateApplicationShrinkRequestTag },
      targetVersion: 'string',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

