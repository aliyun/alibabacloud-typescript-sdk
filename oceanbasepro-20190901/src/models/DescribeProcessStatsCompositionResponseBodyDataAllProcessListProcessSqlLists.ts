// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlListsProcessSqlList } from "./DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlListsProcessSqlList";


export class DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlLists extends $dara.Model {
  clientIp?: string;
  command?: string;
  cpuTime?: number;
  database?: string;
  dynamicSql?: boolean;
  executeTime?: number;
  planId?: number;
  processSqlList?: DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlListsProcessSqlList[];
  proxySessId?: string;
  serverIp?: string;
  sessionId?: number;
  sqlId?: string;
  sqlText?: string;
  status?: string;
  tenantId?: string;
  traceId?: string;
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
      processSqlList: 'ProcessSqlList',
      proxySessId: 'ProxySessId',
      serverIp: 'ServerIp',
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
      processSqlList: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataAllProcessListProcessSqlListsProcessSqlList },
      proxySessId: 'string',
      serverIp: 'string',
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
    if(Array.isArray(this.processSqlList)) {
      $dara.Model.validateArray(this.processSqlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

