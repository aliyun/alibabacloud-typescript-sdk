// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. The value depends on the resource type (ResourceType) for which you want to query the renewal price:
   * 
   * * If `ResourceType` is set to `Desktop` (to query the renewal price of a cloud computer), set `InstanceId` to the cloud computer ID.
   * * If `ResourceType` is set to `DesktopGroup` (to query the renewal price of a cloud computer pool), set `InstanceId` to the cloud computer pool ID.
   * * If `ResourceType` is set to `Bandwidth` (to query the renewal price of premium Internet bandwidth), set `InstanceId` to the premium Internet bandwidth ID.
   * 
   * @example
   * ecd-6ldllk9zxcpfhs****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs. The values depend on the resource type (ResourceType) for which you want to query the renewal price.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The renewal duration. Valid values of this parameter are determined by the value of `PeriodUnit`.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, and 6.
   * - If `PeriodUnit` is set to `Year`, valid values are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration, which is the unit of the `Period` parameter.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Wuying Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the resource ownership user in reseller pattern. You do not need to specify this parameter in non-reseller pattern.
   * 
   * @example
   * 1017457975738750
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

