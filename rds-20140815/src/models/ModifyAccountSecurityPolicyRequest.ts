// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountSecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1ibu****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The custom password policy for the account of the ApsaraDB RDS for SQL Server instance. The following policies are supported:
   * 
   * *   `{"account security policy": {"MaximumPasswordAge": Specify the maximum password age}}`: You can configure only the maximum password age. After the maximum password age is reached, you must change the password.
   * *   `{"accountSecurityPolicy": {"MaximumPasswordAge": Specify the minimum password age}}`: You can configure only the minimum password age. During the specified period, you cannot change the password.
   * *   `{"accountSecurityPolicy": {"MaximumPasswordAge": Specify the maximum password age, "MinimumPasswordAge": Specify the minimum password age}}`: You can configure the maximum and minimum password age at the same time.
   * 
   * >  The minimum password age cannot be greater than the maximum password age. Valid values for the minimum password age: 0 to 998. Valid values for the maximum password age: 0 to 999.
   * 
   * This parameter is required.
   * 
   * @example
   * {"accountSecurityPolicy": {"MaximumPasswordAge": 30, "MinimumPasswordAge": 20}}
   */
  groupPolicy?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      groupPolicy: 'GroupPolicy',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      groupPolicy: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

