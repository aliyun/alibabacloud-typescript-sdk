// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiveDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the ID of the primary instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the disaster recovery instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the ID of the disaster recovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-tr2whku*****
   */
  guardDBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      guardDBInstanceId: 'GuardDBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      guardDBInstanceId: 'string',
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

