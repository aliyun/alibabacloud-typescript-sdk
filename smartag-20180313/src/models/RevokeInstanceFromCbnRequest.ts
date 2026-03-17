// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromCbnRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CCN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccn-n2935s1mnwv8i*****
   */
  ccnInstanceId?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jm*****
   */
  cenInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CCN instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      cenInstanceId: 'CenInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      cenInstanceId: 'string',
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

