// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * Specifies whether the instance is deleted. Valid values: 
   * - **false**: The instance is running. Queries the information of a running instance.
   * - **true**: The instance is deleted. Queries the information of a deleted instance.
   * 
   * @example
   * false
   */
  isDelete?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * >This parameter is supported only on the China site.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      isDelete: 'IsDelete',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engine: 'string',
      isDelete: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
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

