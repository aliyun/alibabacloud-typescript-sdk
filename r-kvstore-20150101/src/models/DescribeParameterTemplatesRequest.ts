// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The architecture of the instance. For more information, see [Architecture overview](https://help.aliyun.com/document_detail/86132.html). Valid values:
   * 
   * * **logic**: cluster or read/write splitting architecture.
   * * **normal**: standard architecture (primary/secondary).
   * 
   * <props="china">If **EngineVersion** is set to **6.0**, this parameter does not support the value **logic**.
   * 
   * This parameter is required.
   * 
   * @example
   * logic
   */
  characterType?: string;
  /**
   * @remarks
   * The database type. Set the value to **Redis**.
   * 
   * This parameter is required.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The major engine version of the instance. Valid values: **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to obtain the instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to query the account parameter template. Set the value to account.
   * 
   * @example
   * account
   */
  parameterCategory?: string;
  /**
   * @remarks
   * The resource group ID. You can invoke the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the resource group ID.
   * > You can also obtain the resource group ID in the console. Related operations, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
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
      parameterCategory: 'ParameterCategory',
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
      parameterCategory: 'string',
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

