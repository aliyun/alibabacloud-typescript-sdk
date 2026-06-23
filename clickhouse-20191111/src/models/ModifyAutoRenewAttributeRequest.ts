// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. To specify multiple cluster IDs, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1uy5ff6*****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The renewal duration. The default value is **1**.
   * 
   * - If you set \\`PeriodUnit\\` to **Month**, valid values are integers from 1 to 11.
   * 
   * - If you set \\`PeriodUnit\\` to **Year**, valid values are 1, 2, 3, and 5.
   * 
   * > A longer subscription period offers a better price. For example, a one-year subscription is more cost-effective than a 10-month or 11-month subscription.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal duration specified by the \\`Duration\\` parameter. Valid values: Month and Year.
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
   * The renewal method. Valid values:
   * 
   * - **AutoRenewal**: Auto-renewal.
   * 
   * - **Normal**: Manual renewal.
   * 
   * - **NotRenewal**: The cluster is not renewed after it expires.
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

