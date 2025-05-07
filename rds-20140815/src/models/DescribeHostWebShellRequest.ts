// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostWebShellRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account that is used to log on to the host of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * testOsAccount1
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the host account.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  accountPassword?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance hostname. You can call the DescribeDBInstanceIpHostname operation to query the hostname.
   * 
   * This parameter is required.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeDBInstanceAttribute operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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

