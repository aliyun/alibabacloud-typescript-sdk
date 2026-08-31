// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityArchiveTableRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * The mode for adding the archived table. Valid values:
   * 
   * - CREATE_NEW_TABLE: creates a new table.
   * - BIND_EXIST_TABLE: binds an existing table.
   * 
   * @example
   * CREATE_NEW_TABLE
   */
  addMode?: string;
  /**
   * @remarks
   * The ID of the archived table. If this parameter is specified, the operation runs in update mode, and you cannot specify AddMode or NewTableNamePrefix. If this parameter is not specified, the operation runs in create mode.
   * 
   * @example
   * 88012
   */
  archiveTableId?: number;
  /**
   * @remarks
   * The name of the existing table. This parameter is required when AddMode is set to BIND_EXIST_TABLE. For Dataphin tables, use the format "project_name.table_name" (for example, dataphin03.ads_region_order_summary). For datasource tables, use the format "database/schema.table_name" (for example, order_db.order_exception_data). The table must belong to the same project or datasource as the monitored object, and the table schema must contain system fields with the dataphin_quality_ prefix.
   * 
   * @example
   * dataphin03.ads_region_order_summary
   */
  existTableName?: string;
  /**
   * @remarks
   * The lifecycle of the table, in days. The value must be a positive integer. If this parameter is not specified, no lifecycle is set. This parameter is valid only when creating a new table or in edit pattern, and only when the table belongs to MaxCompute, Hadoop series, or Hive. This parameter cannot be specified when AddMode is set to BIND_EXIST_TABLE.
   * 
   * @example
   * 30
   */
  lifecycle?: number;
  /**
   * @remarks
   * The maximum number of archived rows. A positive integer specifies the limit on the number of archived rows. The console provides options of 10,000, 100,000, and 500,000. A value of -1 indicates full archiving. Default value: 10000. This parameter is supported only for MaxCompute, Hadoop series, or Hive.
   * 
   * @example
   * 100000
   */
  maxArchiveCount?: number;
  /**
   * @remarks
   * The table name prefix for the new archived table. This parameter is required when AddMode is set to CREATE_NEW_TABLE. The system automatically appends the _exception_data suffix. For example, if you specify vip_user_tips112, the actual table name is vip_user_tips112_exception_data.
   * 
   * @example
   * vip_user_tips112
   */
  newTableNamePrefix?: string;
  /**
   * @remarks
   * Specifies whether to set the archived table as the active table. Only the value true is supported. After the table is set as active, the previously active table under the same monitored object is automatically deactivated (only one active table is allowed at a time). If you set this parameter to false, an InvalidParameter error is returned. If this parameter is not specified, the default value true is used. If this parameter is left empty, the active status remains unchanged.
   * 
   * @example
   * true
   */
  setActive?: boolean;
  /**
   * @remarks
   * The ID of the monitored object to which the archived table belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      addMode: 'AddMode',
      archiveTableId: 'ArchiveTableId',
      existTableName: 'ExistTableName',
      lifecycle: 'Lifecycle',
      maxArchiveCount: 'MaxArchiveCount',
      newTableNamePrefix: 'NewTableNamePrefix',
      setActive: 'SetActive',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addMode: 'string',
      archiveTableId: 'number',
      existTableName: 'string',
      lifecycle: 'number',
      maxArchiveCount: 'number',
      newTableNamePrefix: 'string',
      setActive: 'boolean',
      watchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityArchiveTableRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The upsert command.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityArchiveTableRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      upsertCommand: UpsertQualityArchiveTableRequestUpsertCommand,
    };
  }

  validate() {
    if(this.upsertCommand && typeof (this.upsertCommand as any).validate === 'function') {
      (this.upsertCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

