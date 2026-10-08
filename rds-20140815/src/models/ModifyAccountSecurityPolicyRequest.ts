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
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1ibu****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The custom password policy for ApsaraDB RDS for SQL Server accounts. The following policies are supported:
   * 
   * - Set only the maximum password age. After this period expires, the password must be changed: `{"accountSecurityPolicy": {"MaximumPasswordAge": Specify the maximum age}}`
   * - Set only the minimum password age. The password cannot be changed again within this period: `{"accountSecurityPolicy": {"MaximumPasswordAge": Specify the minimum age}}`
   * - Set both the maximum and minimum password ages: `{"accountSecurityPolicy": {"MaximumPasswordAge": Specify the maximum age, "MinimumPasswordAge": Specify the minimum age}}`
   * 
   * > The minimum password age (valid values: 0 to 998) cannot be greater than the maximum password age (valid values: 0 to 999).
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

