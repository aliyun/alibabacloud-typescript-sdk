// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RowFilter } from "./RowFilter";


export class PermissionColumns extends $dara.Model {
  columnNames?: string[];
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
  columns?: PermissionColumns;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * database_name
   */
  database?: string;
  expireTime?: string;
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
   * The resource type of the permission.
   * 
   * @example
   * CATALOG
   */
  resourceType?: string;
  rowFilter?: RowFilter;
  /**
   * @remarks
   * The name of the data table.
   * 
   * @example
   * table_name
   */
  table?: string;
  view?: string;
  static names(): { [key: string]: string } {
    return {
      access: 'access',
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

