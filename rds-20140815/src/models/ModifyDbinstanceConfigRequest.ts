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
   * The name of the configuration item to modify. This parameter is used together with ConfigValue.
   * <details>
   * <summary>ApsaraDB RDS for PostgreSQL configuration items</summary>
   * 
   * - **pgbouncer**: Modifies the PgBouncer feature.
   * - **encryptionKey**: Modifies the cloud disk encryption feature.
   * - **duckdb_create_databases**: Configures databases of the primary instance as DuckDB column store databases in batches.
   * - **duckdb_prepare_dependency**: Configures the primary instance with one click so that its parameters and minor engine version meet the [prerequisites](https://help.aliyun.com/document_detail/2977241.html) for creating a DuckDB-based analytical instance. If the primary instance already has read-only instances, the read-only instances are also updated.
   * - **enable_db_visible_by_connect_rls**: Enables CONNECT RLS on the instance to control database visibility.
   * - **set_db_visible_by_connect_rls**: Enables CONNECT RLS on a database to control database visibility. This can be called only after CONNECT RLS is enabled on the instance.
   * 
   * </details>
   * 
   * <details>
   * <summary>ApsaraDB RDS for SQL Server configuration items</summary>
   * 
   * <props="intl">
   * 
   * - **clear_errorlog**: Clears error logs.
   * - **encryptionKey**: Modifies the cloud disk encryption feature. Serverless instances and shared instance types do not support this feature.
   * 
   * 
   * 
   * <props="china">
   * 
   * 
   * - **backup_recovery_model**: Enables the simple recovery model feature. Only Basic Edition instances support this feature. **This feature cannot be disabled after it is enabled**.
   * - **clear_errorlog**: Clears error logs.
   * - **encryptionKey**: Modifies the cloud disk encryption feature. Serverless instances and shared instance types do not support this feature.
   * 
   * 
   * </details>
   * 
   * This parameter is required.
   * 
   * @example
   * pgbouncer
   */
  configName?: string;
  /**
   * @remarks
   * The value of the configuration item to modify. This parameter is used together with ConfigName.
   * 
   * <details>
   * <summary>ApsaraDB RDS for PostgreSQL configuration item values</summary>
   * 
   * - PgBouncer feature: **true** (enable) or **false** (disable).
   * - Cloud disk encryption feature:
   *   - **ServiceKey**: Uses an automatically generated key from Alibaba Cloud, which is the RDS-managed service key (Default Service CMK), to enable cloud disk encryption.
   *   - **<Key>**: Uses a custom key to enable cloud disk encryption or replaces the current key. Example: `494c98ce-f2b5-48ab-96ab-36c986b6****`.
   *   - **disabled**: Disables cloud disk encryption.
   * - One-click fix for prerequisites to create a DuckDB-based analytical instance: **duckdb_prepare_dependency**
   * - Configure databases of the primary instance as DuckDB column store databases in batches. The value is a JSON string. Example: `{"dbNames": "db1,db2,db3", "accountName": "yourSuperAccountName"}`, where:
   *   - **dbNames**: The names of databases to convert to DuckDB column store databases. Separate multiple database names with commas (,).
   *   - **accountName**: The privileged user. Specify only one privileged user.
   * - Enable CONNECT RLS on the instance to control database visibility: **true** to enable.
   * - Enable CONNECT RLS on a database to control database visibility: The **database names** managed by CONNECT RLS. Separate multiple database names with commas (,). Example: **testdb1,testdb2**. When a client connects to a database with CONNECT RLS enabled, the database list is displayed based on whether the client has CONNECT permissions on other databases.
   * </details>
   * <details>
   * <summary>ApsaraDB RDS for SQL Server configuration item values</summary>
   * 
   * <props="intl">
   * 
   * - Error log cleanup feature: **1** (confirm cleanup).
   * - Cloud disk encryption feature (**this feature cannot be disabled after it is enabled**):
   *   - **serviceKey**: Uses an automatically generated key from Alibaba Cloud, which is the RDS-managed service key (Default Service CMK), to enable cloud disk encryption.
   *   - **<Key>**: Uses a custom key to enable cloud disk encryption or replaces the current key. Example: `494c98ce-f2b5-48ab-96ab-36c986b6****`.
   * 
   * 
   * 
   * 
   * <props="china">
   * 
   * - Simple recovery feature: **simple** (enable simple recovery).
   * - Error log cleanup feature: **1** (confirm cleanup).
   * - Cloud disk encryption feature (**this feature cannot be disabled after it is enabled**):
   *   - **serviceKey**: Uses an automatically generated key from Alibaba Cloud, which is the RDS-managed service key (Default Service CMK), to enable cloud disk encryption.
   *   - **<Key>**: Uses a custom key to enable cloud disk encryption or replaces the current key. Example: `494c98ce-f2b5-48ab-96ab-36c986b6****`.
   * 
   * 
   * 
   * </details>
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  configValue?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-2ze****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID. You can call DescribeDBInstanceAttribute to obtain the resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time at which the modification takes effect. We recommend that you perform specification changes during off-peak hours. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2025-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The switchover time. Valid values:
   * - **Immediate**: The modification takes effect immediately.
   * - **MaintainTime**: The modification takes effect during the maintenance window. You can call ModifyDBInstanceMaintainTime to modify the maintenance window.
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

