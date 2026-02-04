// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The architecture of the instance. For more information, see [Overview](https://help.aliyun.com/document_detail/86132.html). Valid values:
   * 
   * *   **logic**: The instance is a cluster master-replica instance or a read/write splitting instance.
   * *   **normal**: The instance is a standard master-replica instance.
   * 
   * This parameter is required.
   * 
   * @example
   * logic
   */
  characterType?: string;
  /**
   * @remarks
   * The database engine that is run on the instance. Set the value to **Redis**.
   * 
   * This parameter is required.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The major version of the instance. Valid values: **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the IDs of instances.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the IDs of resource groups.
   * 
   * >  You can also query the ID of a resource group in the Resource Management console. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
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
      characterType: 'CharacterType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceId: 'InstanceId',
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
      characterType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceId: 'string',
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

