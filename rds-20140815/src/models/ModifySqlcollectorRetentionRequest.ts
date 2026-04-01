// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySQLCollectorRetentionRequest extends $dara.Model {
  /**
   * @remarks
   * The log retention period that is allowed by the SQL Explorer feature on the instance. Valid values:
   * 
   * *   30: 30 days
   * *   180: 180 days
   * *   365: one year
   * *   1095: three years
   * *   1825: five years
   * 
   * This parameter is required.
   * 
   * @example
   * 365
   */
  configValue?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the resource group ID.
   * 
   * @example
   * rg-acfmyxxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      DBInstanceId: 'DBInstanceId',
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
      configValue: 'string',
      DBInstanceId: 'string',
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

