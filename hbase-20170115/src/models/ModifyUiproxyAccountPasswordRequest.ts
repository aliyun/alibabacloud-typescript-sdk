// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUIProxyAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      clusterId: 'ClusterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      clusterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

