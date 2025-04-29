// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReservedInstanceAutoRenewAttributeRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The auto-renewal cycle.
   * 
   * Valid values: 1 and 3.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration.
   * 
   * Valid values: Year and Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the reserved instances. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to automatically renew the reserved instances. Valid values:
   * 
   * *   AutoRenewal: automatically renews the reserved instances.
   * *   Normal: manually renews the reserved instances.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The IDs of the reserved instances.
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

