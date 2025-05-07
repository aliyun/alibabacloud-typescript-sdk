// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReadDBInstanceDelayRequest extends $dara.Model {
  /**
   * @remarks
   * The primary instance ID. You can call the DescribeDBInstances operation to query the primary instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp*****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The read-only instance ID. You can call the DescribeDBInstances operation to query the read-only instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rr-bp*****
   */
  readInstanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readInstanceId: 'ReadInstanceId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readInstanceId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

