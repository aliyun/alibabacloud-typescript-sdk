// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeColumnSecurityLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the field. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) or [ListColumns](https://help.aliyun.com/document_detail/141870.html) operation to query the column name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * The database ID. The database can be a physical database or a logical database.
   * 
   * *   The ID of a physical database: You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the physical database ID.
   * *   To obtain the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 325**
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database
   * *   **false**: The database is a physical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isLogic?: boolean;
  /**
   * @remarks
   * The new security level of the column. The valid values are the same as the sensitivity levels of the classification template that is associated with the instance. You can call the [ListSensitivityLevel](https://help.aliyun.com/document_detail/2539519.html) operation to obtain the sensitivity levels of the classification template.
   * 
   * This parameter is required.
   * 
   * @example
   * S2
   */
  newSensitivityLevel?: string;
  /**
   * @remarks
   * The database name. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the database name.
   * 
   * > You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the name of a physical database and call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the name of a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) or [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table name.
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
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 10****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      isLogic: 'IsLogic',
      newSensitivityLevel: 'NewSensitivityLevel',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      isLogic: 'boolean',
      newSensitivityLevel: 'string',
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

