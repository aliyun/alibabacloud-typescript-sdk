// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewalAttributeRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoRenewalPeriod?: string;
  /**
   * @example
   * Year
   */
  autoRenewalPeriodUnit?: string;
  /**
   * @example
   * AutoRenewal
   */
  autoRenewalStatus?: string;
  /**
   * @remarks
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

