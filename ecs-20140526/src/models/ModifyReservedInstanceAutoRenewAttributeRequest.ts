// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReservedInstanceAutoRenewAttributeRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The auto-renewal epoch.
   * 
   * <props="intl">Valid values: 1 and 3.
   * 
   * <props="china">
   * 
   * - If `PeriodUnit` is set to `Year`, valid values: 1, 3, and 5.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the auto-renewal period.
   * 
   * <props="intl">Valid values: Year.
   * 
   * <props="china">Valid values: Month and Year.
   * 
   * <props="china">Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the reserved instances. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription reserved instances. Valid values:
   * 
   * - AutoRenewal: enables auto-renewal.
   * - Normal: enables manual renewal.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The reserved instance ID.
   */
  reservedInstanceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      reservedInstanceId: 'ReservedInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstanceId)) {
      $dara.Model.validateArray(this.reservedInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

