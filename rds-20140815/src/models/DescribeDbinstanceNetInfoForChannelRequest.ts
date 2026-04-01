// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoForChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1k8s41l2o52****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the endpoint to query. Valid values:
   * 
   * *   **0**: a regular endpoint. This is the default value.
   * *   **1**: a read/write splitting endpoint that is assigned after the shared proxy feature is enabled.
   * 
   * @example
   * 0
   */
  DBInstanceNetRWSplitType?: string;
  /**
   * @remarks
   * An internal parameter. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  flag?: string;
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
      flag: 'string',
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

