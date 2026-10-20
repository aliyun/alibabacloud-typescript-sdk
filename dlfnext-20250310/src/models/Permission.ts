// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColumnMask } from "./ColumnMask";
import { RowFilter } from "./RowFilter";


export class PermissionColumns extends $dara.Model {
  /**
   * @remarks
   * The list of included column names.
   */
  columnNames?: string[];
  /**
   * @remarks
   * The list of excluded column names.
   */
  excludedColumnNames?: string[];
  static names(): { [key: string]: string } {
    return {
      columnNames: 'columnNames',
      excludedColumnNames: 'excludedColumnNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      excludedColumnNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    if(Array.isArray(this.excludedColumnNames)) {
      $dara.Model.validateArray(this.excludedColumnNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Permission extends $dara.Model {
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * DROP
   */
  access?: string;
  /**
   * @remarks
   * The column masking transformation rules mapped by column name. The key is the column name, and the value is the corresponding masking transformation configuration.
   */
  columnMasking?: { [key: string]: ColumnMask };
  /**
   * @remarks
   * The custom columns.
   */
  columns?: PermissionColumns;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database_name
   */
  database?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1762398431157
   */
  expireTime?: string;
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * function_name
   */
  function?: string;
  /**
   * @remarks
   * The user resource descriptor.
   * 
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  principal?: string;
  /**
   * @remarks
   * The permission resource type.
   * 
   * @example
   * CATALOG
   */
  resourceType?: string;
  /**
   * @remarks
   * The row filter.
   */
  rowFilter?: RowFilter;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table_name
   */
  table?: string;
  /**
   * @remarks
   * The view name.
   * 
   * @example
   * view_name
   */
  view?: string;
  static names(): { [key: string]: string } {
    return {
      access: 'access',
      columnMasking: 'columnMasking',
      columns: 'columns',
      database: 'database',
      expireTime: 'expireTime',
      function: 'function',
      principal: 'principal',
      resourceType: 'resourceType',
      rowFilter: 'rowFilter',
      table: 'table',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      access: 'string',
      columnMasking: { 'type': 'map', 'keyType': 'string', 'valueType': ColumnMask },
      columns: PermissionColumns,
      database: 'string',
      expireTime: 'string',
      function: 'string',
      principal: 'string',
      resourceType: 'string',
      rowFilter: RowFilter,
      table: 'string',
      view: 'string',
    };
  }

  validate() {
    if(this.columnMasking) {
      $dara.Model.validateMap(this.columnMasking);
    }
    if(this.columns && typeof (this.columns as any).validate === 'function') {
      (this.columns as any).validate();
    }
    if(this.rowFilter && typeof (this.rowFilter as any).validate === 'function') {
      (this.rowFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

