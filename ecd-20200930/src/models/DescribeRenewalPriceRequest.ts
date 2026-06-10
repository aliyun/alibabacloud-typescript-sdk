// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. The value for this parameter depends on the resource type:
   * 
   * - If `ResourceType` is set to `Desktop`, set `InstanceId` to the cloud desktop ID.
   * 
   * - If `ResourceType` is set to `DesktopGroup`, set `InstanceId` to the desktop pool ID.
   * 
   * - If `ResourceType` is set to `Bandwidth`, set `InstanceId` to the premium bandwidth ID.
   * 
   * @example
   * ecd-6ldllk9zxcpfhs****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs. The values to provide depend on the resource type (`ResourceType`).
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The renewal duration. The valid values depend on the `PeriodUnit` parameter.
   * 
   * - If `PeriodUnit` is set to `Month`, the valid values are 1, 2, 3, and 6.
   * 
   * - If `PeriodUnit` is set to `Year`, the valid values are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the `Period` parameter.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to get a list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

