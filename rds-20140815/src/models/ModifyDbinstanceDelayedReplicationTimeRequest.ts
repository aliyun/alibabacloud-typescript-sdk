// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDelayedReplicationTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The replication latency of the read-only instance. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  readSQLReplicationTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      readSQLReplicationTime: 'ReadSQLReplicationTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      readSQLReplicationTime: 'string',
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

