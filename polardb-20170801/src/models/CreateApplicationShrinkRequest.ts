// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequest extends $dara.Model {
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
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      autoCreatePolarFs: 'AutoCreatePolarFs',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      componentsShrink: 'Components',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      dryRun: 'DryRun',
      endpointsShrink: 'Endpoints',
      memApplicationSpecShrink: 'MemApplicationSpec',
      payType: 'PayType',
      period: 'Period',
      polarFSInstanceId: 'PolarFSInstanceId',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      architecture: 'string',
      autoCreatePolarFs: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      componentsShrink: 'string',
      DBClusterId: 'string',
      description: 'string',
      dryRun: 'boolean',
      endpointsShrink: 'string',
      memApplicationSpecShrink: 'string',
      payType: 'string',
      period: 'string',
      polarFSInstanceId: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

