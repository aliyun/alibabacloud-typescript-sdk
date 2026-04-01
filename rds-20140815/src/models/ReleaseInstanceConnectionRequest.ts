// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxx.mysql.rds.aliyuncs.com
   */
  currentConnectionString?: string;
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
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **0**: virtual private cloud (VPC)
   * *   **1**: classic network
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      instanceNetworkType: 'string',
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

