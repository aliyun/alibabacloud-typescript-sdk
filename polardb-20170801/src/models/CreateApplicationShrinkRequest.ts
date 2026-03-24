// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequestTag extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
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
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * x86
   */
  architecture?: string;
  autoAllocatePublicEip?: boolean;
  autoCreatePolarFs?: boolean;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  autoUseCoupon?: boolean;
  componentsShrink?: string;
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * myapp
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  endpointsShrink?: string;
  memApplicationSpecShrink?: string;
  /**
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * Year
   */
  period?: string;
  /**
   * @example
   * pcs-********************
   */
  polarFSInstanceId?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  securityGroupId?: string;
  tag?: CreateApplicationShrinkRequestTag[];
  /**
   * @example
   * latest
   */
  targetVersion?: string;
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  vpcId?: string;
  /**
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      autoAllocatePublicEip: 'AutoAllocatePublicEip',
      autoCreatePolarFs: 'AutoCreatePolarFs',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      componentsShrink: 'Components',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      dryRun: 'DryRun',
      endpointsShrink: 'Endpoints',
      memApplicationSpecShrink: 'MemApplicationSpec',
      modelApi: 'ModelApi',
      modelApiKey: 'ModelApiKey',
      modelBaseUrl: 'ModelBaseUrl',
      modelFrom: 'ModelFrom',
      modelName: 'ModelName',
      payType: 'PayType',
      period: 'Period',
      polarFSInstanceId: 'PolarFSInstanceId',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
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
      autoAllocatePublicEip: 'boolean',
      autoCreatePolarFs: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      componentsShrink: 'string',
      DBClusterId: 'string',
      description: 'string',
      dryRun: 'boolean',
      endpointsShrink: 'string',
      memApplicationSpecShrink: 'string',
      modelApi: 'string',
      modelApiKey: 'string',
      modelBaseUrl: 'string',
      modelFrom: 'string',
      modelName: 'string',
      payType: 'string',
      period: 'string',
      polarFSInstanceId: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
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

