// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillProcessListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 127.0.0.1
   */
  clientIp?: string;
  /**
   * @remarks
   * The start command for the container of the application.
   * 
   * @example
   * select 1
   */
  command?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Execution time (UTC+8). If it is left empty, it means to execute immediately.
   * 
   * @example
   * 142
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 127.0.0.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * 1123
   */
  sessionId?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * :
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * SLEEP
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t3ogqv07a56n4
   */
  tenantId?: string;
  /**
   * @remarks
   * The database username.
   * 
   * @example
   * oas
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      command: 'Command',
      database: 'Database',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      serverIp: 'ServerIp',
      sessionId: 'SessionId',
      sqlText: 'SqlText',
      status: 'Status',
      tenantId: 'TenantId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      command: 'string',
      database: 'string',
      errorMessage: 'string',
      executeTime: 'string',
      serverIp: 'string',
      sessionId: 'number',
      sqlText: 'string',
      status: 'string',
      tenantId: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

