// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBInstanceSecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC******
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query the IDs of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp15i4hn07r******
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group rule. You can call the [DescribeDBInstanceSecurityGroupRule](https://help.aliyun.com/document_detail/2834044.html) to obtain the ID of the security group rule.
   * 
   * This parameter is required.
   * 
   * @example
   * sgr-2ze17u******
   */
  securityGroupRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupRuleIds: 'SecurityGroupRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

