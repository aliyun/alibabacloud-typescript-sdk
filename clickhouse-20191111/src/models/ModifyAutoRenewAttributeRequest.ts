// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. Separate multiple cluster IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1uy5ff6*****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The renewal duration. Default value: **1**.
   * 
   * - If PeriodUnit is set to **Month**, valid values are 1 to 11.
   * 
   * - If PeriodUnit is set to **Year**, valid values are 1, 2, 3, and 5.
   * > A longer subscription duration offers a greater discount. For example, a 1-year subscription is more cost-effective than a 10-month or 11-month subscription.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal duration, which is the unit of the Duration parameter. Valid values: Month and Year.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status. Valid values:
   * 
   * - **AutoRenewal**: Auto-renewal.
   * 
   * - **Normal**: Manual renewal.
   * 
   * - **NotRenewal**: No renewal upon expiration.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterIds: 'DBClusterIds',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIds: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

