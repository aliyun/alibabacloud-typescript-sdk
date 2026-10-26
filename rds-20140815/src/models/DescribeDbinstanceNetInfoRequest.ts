// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * * **Normal**: regular endpoint.
   * * **ReadWriteSplitting**: read/write splitting endpoint.
   * 
   * > By default, endpoints of all types are returned.
   * 
   * @example
   * Normal
   */
  DBInstanceNetRWSplitType?: string;
  /**
   * @remarks
   * The reserved parameter. You do not need to configure this parameter.
   * 
   * @example
   * test
   */
  flag?: number;
  /**
   * @remarks
   * The name of the group to which the general-purpose ApsaraDB RDS for MySQL instance in the dedicated cluster belongs.
   * 
   * @example
   * rgc-2ze****
   */
  generalGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetRWSplitType: 'DBInstanceNetRWSplitType',
      flag: 'Flag',
      generalGroupName: 'GeneralGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      DBInstanceNetRWSplitType: 'string',
      flag: 'number',
      generalGroupName: 'string',
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

