// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveDataAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the column that contains sensitive data.
   * 
   * @example
   * ExampleColumnName
   */
  columnName?: string;
  /**
   * @remarks
   * The name of the database that stores the sensitive data.
   * 
   * @example
   * ExampleDbName
   */
  dbName?: string;
  /**
   * @remarks
   * The end of the time range for which you want to query the audit logs for sensitive information. Specify the time in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-11-18 11:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The function module whose audit logs you want to query for sensitive data. If you do not specify this parameter, all audit logs are queried. Valid values:
   * 
   * *   **SQL_CONSOLE**: data query
   * *   **SQL_CONSOLE_EXPORT**: query result export
   * *   **DATA_CHANGE**: data change
   * *   **DATA_EXPORT**: data export
   * 
   * @example
   * SQL_CONSOLE
   */
  moduleName?: string;
  /**
   * @remarks
   * The username of the requester.
   * 
   * @example
   * ExampleOpUserName
   */
  opUserName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Example: 100
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range for which you want to query the audit logs for sensitive information. Specify the time in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-11-18 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table that stores the sensitive data.
   * 
   * @example
   * ExampleTableName
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbName: 'DbName',
      endTime: 'EndTime',
      moduleName: 'ModuleName',
      opUserName: 'OpUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbName: 'string',
      endTime: 'string',
      moduleName: 'string',
      opUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
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

