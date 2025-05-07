// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReadonlyInstanceDelayReplicationTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the read-only instance. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rr-bpxxxxx
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The replication latency of the data replication. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  readSQLReplicationTime?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      readSQLReplicationTime: 'ReadSQLReplicationTime',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      readSQLReplicationTime: 'string',
      resourceGroupId: 'string',
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

