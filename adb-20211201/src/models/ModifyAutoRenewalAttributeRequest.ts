// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewalAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The duration of the auto-renewal. Default value: 1. Valid values:
   * 
   * *   When **AutoRenewalPeriod** is set to **Month**, the value ranges from 1 to 11 (integer).
   * *   When **AutoRenewalPeriod** is set to **Month**, the valid values are 1, 2, 3, and 5 (integer).
   * 
   * >  Longer renewal periods offer better pricing. Renewing for 1 year is more cost-effective than renewing for 10 or 11 months.
   * 
   * @example
   * 1
   */
  autoRenewalPeriod?: string;
  /**
   * @remarks
   * Auto-renewal duration. Valid values:
   * 
   * *   Year.
   * *   Month.
   * 
   * @example
   * Year
   */
  autoRenewalPeriodUnit?: string;
  /**
   * @remarks
   * The renewal method. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed. Before the cluster expires, the system sends you a reminder by SMS message.
   * *   **NotRenewal**: The cluster is not renewed. Reminders are only sent three days before cluster expiration.
   * 
   * @example
   * AutoRenewal
   */
  autoRenewalStatus?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6pl56w1j8h****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenewalPeriod: 'AutoRenewalPeriod',
      autoRenewalPeriodUnit: 'AutoRenewalPeriodUnit',
      autoRenewalStatus: 'AutoRenewalStatus',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewalPeriod: 'string',
      autoRenewalPeriodUnit: 'string',
      autoRenewalStatus: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

