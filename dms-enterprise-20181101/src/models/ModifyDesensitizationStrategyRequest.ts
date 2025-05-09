// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesensitizationStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the field. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the field name.
   * 
   * >  You can also call the [ListColumns](https://help.aliyun.com/document_detail/141870.html) operation to obtain the field name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dbId?: number;
  /**
   * @remarks
   * The desensitization algorithm of the field setting. The default value is false. The values are as follows:
   * 
   * - **true**: default desensitization algorithm.
   * 
   * - **false** :semi-desensitization algorithm.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a physical database.
   * *   **false**: The database is a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isLogic?: boolean;
  /**
   * @remarks
   * Specifies whether to reset the masking rule. Valid value:
   * 
   * *   **true**: Reset the masking rule.
   * *   **false**: Do not reset the masking rule. This is the default value.
   * 
   * @example
   * false
   */
  isReset?: boolean;
  /**
   * @remarks
   * The ID of the masking rule.
   * 
   * @example
   * 53
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the database. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the database name.
   * 
   * > 
   * 
   * *   If the database is a physical database, you can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the database name.
   * 
   * *   If the database is a logical database, you can call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the table name.
   * 
   * >  You can also call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to obtain the table name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) in the topic "Manage DMS tenants."
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      isDefault: 'IsDefault',
      isLogic: 'IsLogic',
      isReset: 'IsReset',
      ruleId: 'RuleId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      isDefault: 'boolean',
      isLogic: 'boolean',
      isReset: 'boolean',
      ruleId: 'number',
      schemaName: 'string',
      tableName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

