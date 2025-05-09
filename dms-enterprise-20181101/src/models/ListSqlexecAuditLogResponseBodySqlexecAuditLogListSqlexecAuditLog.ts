// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog extends $dara.Model {
  /**
   * @remarks
   * The number of rows affected by the SQL statement. For example, if you execute an SQL statement to query data, the number of retrieved rows is returned.
   * 
   * @example
   * 2
   */
  affectRows?: number;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 2157****
   */
  dbId?: number;
  /**
   * @remarks
   * The amount of time consumed by the execution of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 18
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **FAIL**: The SQL statement fails to be executed.
   * *   **NOEXE**: The SQL statement has not been executed.
   * *   **RUNNING**: The SQL statement is being executed.
   * *   **CANCEL**: The execution of the SQL statement is canceled.
   * *   **SUCCESS**: The SQL statement is executed.
   * 
   * @example
   * SUCCESS
   */
  execState?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 185***
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * >  If the SQL statement takes effect on an instance, the name of the instance is returned.
   * 
   * @example
   * polar123@pc-bp1h9tgq4st9g****.mysql.polardb.rds.aliyuncs.com:3306[polar_qw_test]
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The time when the operation specified by the SQL statement was performed on the instance or database.
   * 
   * @example
   * 2021-11-08 11:04:27
   */
  opTime?: string;
  /**
   * @remarks
   * The comment on the SQL statement.
   * 
   * @example
   * success
   */
  remark?: string;
  /**
   * @remarks
   * The SQL statement that was written.
   * 
   * @example
   * SELECT * FROM `polar123`.`p_qw` ORDER BY `id` DESC
   */
  SQL?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **SELECT**: the SQL statement that is used to query data.
   * *   **INSERT**: the SQL statement that is used to insert data.
   * *   **DELETE**: the SQL statement that is used to delete data.
   * *   **CREATE_TABLE**: the SQL statement that is used to create tables.
   * 
   * >  To view more types of SQL statements, log on to the DMS console and click Security and Specifications. In the left-side navigation pane, click **Operation Audit**. Then, you can view all supported types of SQL statements from the **SQL type** drop-down list.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * polar123
   */
  schemaName?: string;
  /**
   * @remarks
   * The ID of the user who wrote the SQL statement.
   * 
   * @example
   * 12****
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user who wrote the SQL statement.
   * 
   * @example
   * test_UserName
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      dbId: 'DbId',
      elapsedTime: 'ElapsedTime',
      execState: 'ExecState',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      logic: 'Logic',
      opTime: 'OpTime',
      remark: 'Remark',
      SQL: 'SQL',
      SQLType: 'SQLType',
      schemaName: 'SchemaName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      dbId: 'number',
      elapsedTime: 'number',
      execState: 'string',
      instanceId: 'number',
      instanceName: 'string',
      logic: 'boolean',
      opTime: 'string',
      remark: 'string',
      SQL: 'string',
      SQLType: 'string',
      schemaName: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

