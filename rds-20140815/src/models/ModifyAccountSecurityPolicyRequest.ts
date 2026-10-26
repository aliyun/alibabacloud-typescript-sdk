// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountSecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1ibu****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The custom account password policy for ApsaraDB RDS for SQL Server. Supported policies:
   * 
   * - Set only the maximum password age. The password must be changed after this period: `{"accountSecurityPolicy": {"MaximumPasswordAge": <maximum_age>}}`
   * - Set only the minimum password age. The password cannot be changed again within this period: `{"accountSecurityPolicy": {"MinimumPasswordAge": <minimum_age>}}`
   * - Set both the maximum and minimum password ages: `{"accountSecurityPolicy": {"MaximumPasswordAge": <maximum_age>, "MinimumPasswordAge": <minimum_age>}}`
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
   * The ID of the resource group.
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

