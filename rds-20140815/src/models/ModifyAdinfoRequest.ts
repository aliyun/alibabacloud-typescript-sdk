// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyADInfoRequest extends $dara.Model {
  ADAccountName?: string;
  ADDNS?: string;
  ADPassword?: string;
  ADServerIpAddress?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ADAccountName: 'ADAccountName',
      ADDNS: 'ADDNS',
      ADPassword: 'ADPassword',
      ADServerIpAddress: 'ADServerIpAddress',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADAccountName: 'string',
      ADDNS: 'string',
      ADPassword: 'string',
      ADServerIpAddress: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
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

