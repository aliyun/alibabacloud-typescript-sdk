// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlLists } from "./DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlLists";


export class DescribeProcessStatsCompositionResponseBodyDataAllProcessList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The type of the SQL statement being executed in the session.
   * 
   * @example
   * Query
   */
  command?: string;
  /**
   * @remarks
   * The CPU time spent on executing the current SQL statement, in seconds. 
   * 
   * > This parameter is introduced since OceanBase Database V3.2.4 BP5.
   * 
   * @example
   * 1
   */
  cpuTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * c1
   */
  database?: string;
  dynamicSql?: boolean;
  /**
   * @remarks
   * The definition of this parameter varies based on whether the SQL statement is executed.
   * * When the request is accepted and the result is not returned to the client, this parameter indicates the time interval between the time when the request is accepted and the current time, in seconds.
   * * When the request is not accepted, this parameter indicates the duration for which the current status lasts, in seconds.
   * 
   * @example
   * 5
   */
  executeTime?: number;
  /**
   * @remarks
   * The ID of the execution plan.
   * 
   * @example
   * 1898
   */
  planId?: number;
  processSqlLists?: DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlLists[];
  /**
   * @remarks
   * The session ID of the client. If an OceanBase Database Proxy (ODP) is used for connection, the session ID of the ODP is returned.
   * 
   * @example
   * 7521015416********
   */
  proxySessId?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * xx.xx.xx.xx
   */
  serverIp?: string;
  serverSn?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * 322441****
   */
  sessionId?: number;
  /**
   * @remarks
   * The ID of the SQL statement.
   * 
   * @example
   * 45CCBDC7DEBDCDAXXXXAFC********
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL text.
   * 
   * @example
   * select * from c1 where id = 100;
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * test_mysql
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * @example
   * YB420XXX128-00062XXXX8313XXX1-X-X
   */
  traceId?: string;
  /**
   * @remarks
   * The user to which the session belongs.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      command: 'Command',
      cpuTime: 'CpuTime',
      database: 'Database',
      dynamicSql: 'DynamicSql',
      executeTime: 'ExecuteTime',
      planId: 'PlanId',
      processSqlLists: 'ProcessSqlLists',
      proxySessId: 'ProxySessId',
      serverIp: 'ServerIp',
      serverSn: 'ServerSn',
      sessionId: 'SessionId',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      status: 'Status',
      tenantId: 'TenantId',
      traceId: 'TraceId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      command: 'string',
      cpuTime: 'number',
      database: 'string',
      dynamicSql: 'boolean',
      executeTime: 'number',
      planId: 'number',
      processSqlLists: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlLists },
      proxySessId: 'string',
      serverIp: 'string',
      serverSn: 'string',
      sessionId: 'number',
      sqlId: 'string',
      sqlText: 'string',
      status: 'string',
      tenantId: 'string',
      traceId: 'string',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processSqlLists)) {
      $dara.Model.validateArray(this.processSqlLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

