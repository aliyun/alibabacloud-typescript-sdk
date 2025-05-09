// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog extends $dara.Model {
  /**
   * @remarks
   * Indicates the total number of rows returned after the SQL statement was executed. If an SELECT SQL statement is executed, the return value of this parameter indicates the total number of the queried data rows.
   * 
   * @example
   * 1
   */
  affectRows?: number;
  /**
   * @remarks
   * The amount of time that is consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 1324
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   **FAIL**: The execution of the SQL statement fails.
   * *   **CANCEL**: The execution of the SQL statement is canceled.
   * *   **SUCCESS**: The SQL statement is executed.
   * 
   * @example
   * SUCCESS
   */
  execState?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * 4***
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * pc-uf662nrg017c6****.mysql.polardb.rds.aliyuncs.com:3306【test】
   */
  instanceName?: string;
  /**
   * @remarks
   * The time at which the user executes the SQL statement on the database instance. The value of this parameter must be a timestamp that follows the UNIX time format.
   * 
   * @example
   * 1636876446000
   */
  opTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * success
   */
  remark?: string;
  /**
   * @remarks
   * The SQL statement that was executed.
   * 
   * @example
   * select 1;
   */
  SQL?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **SELECT**
   * *   **INSERT**
   * *   **DELETE**
   * *   **CREATE_TABLE**
   * 
   * >  You can choose Operation Audit > Secure Access Proxy in the top navigation bar of the DMS console to view more types of SQL statements.
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
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 4****
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * testNickName
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      elapsedTime: 'ElapsedTime',
      execState: 'ExecState',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
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
      elapsedTime: 'number',
      execState: 'string',
      instanceId: 'number',
      instanceName: 'string',
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

