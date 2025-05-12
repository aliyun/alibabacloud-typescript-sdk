// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. The value you specify depends on the resource type (ResourceType) you\\"re querying the renewal price for.
   * 
   * *   When `ResourceType` is set to `Desktop`, you must provide the cloud computer ID as the value of `InstanceId`.
   * *   When `ResourceType` is set to `DesktopGroup`, you must provide the share ID as the value of `InstanceId`.
   * *   When `ResourceType` is set to `Bandwidth`, you must provide the ID of the premium bandwidth plan as the value of `InstanceId`.
   * 
   * @example
   * ecd-6ldllk9zxcpfhs****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs. The value you specify depends on the resource type (ResourceType) you\\"re querying the renewal price for.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The renewal duration. The valid values for this parameter depend on the value of `PeriodUnit`.
   * 
   * *   If you set `PeriodUnit` to `Month`, set the value of this parameter to 1, 2, 3, or 6.
   * *   If you set `PeriodUnit` to `Year`, set the value of this parameter to 1, 2, or 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration specified by `Period`.
   * 
   * Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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
   * Valid values:
   * 
   * *   Desktop (default): cloud computers.
   * *   Bandwidth: premium bandwidth plans.
   * *   DesktopGroup: cloud computer shares.
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

