// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The retention days of the classic network endpoint. Valid values: **1 to 120**. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  classicExpiredDays?: number;
  /**
   * @remarks
   * The classic network endpoint whose expiration time you want to extend. Two types of classic network endpoints are supported:
   * 
   * *   The internal endpoint of the classic network.
   * *   The read/write splitting endpoint of the classic network.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      connectionString: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

