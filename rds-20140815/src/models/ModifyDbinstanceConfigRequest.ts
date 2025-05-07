// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the configuration item that you want to modify. Valid values:
   * 
   * *   **pgbouncer**. This configuration item is supported for ApsaraDB RDS for PostgreSQL instances.
   * *   **clear_errorlog**. This configuration item is supported for ApsaraDB RDS for SQL Server instances.
   * 
   * This parameter is required.
   * 
   * @example
   * pgbouncer
   */
  configName?: string;
  /**
   * @remarks
   * The value of the configuration item that you want to modify. Valid values:
   * 
   * *   If you set ConfigName to pgbouncer, the valid values are **true** and **false**.
   * *   If you set ConfigName to clear_errorlog, set the value to **1**. The value 1 indicates that error logs are cleaned up.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  configValue?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute to obtain the resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The update time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The time at which the modification takes effect. Valid values:
   * 
   * - **Immediate**: immediately modifies the parameter. This is the default value.
   * - **MaintainTime**: modifies the parameter during the maintenance window of the instance. You can call the ModifyDBInstanceMaintainTime operation to change the maintenance window.
   * - **ScheduleTime**: modifies the parameter at the point in time that you specify. If you specify this value, you must also specify **SwitchTime**.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configName: 'string',
      configValue: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

