// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostWebShellRequest extends $dara.Model {
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
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostName?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionID?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
      hostName: 'HostName',
      ownerId: 'OwnerId',
      regionID: 'RegionID',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
      hostName: 'string',
      ownerId: 'number',
      regionID: 'string',
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

