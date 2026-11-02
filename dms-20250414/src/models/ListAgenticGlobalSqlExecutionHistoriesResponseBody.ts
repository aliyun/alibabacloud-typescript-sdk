// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticGlobalSqlExecutionHistoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the executor. User IDs start with usr_, and agent IDs start with agt_.
   * 
   * @example
   * usr_10001
   */
  actorId?: string;
  /**
   * @remarks
   * The name of the executor.
   * 
   * @example
   * demo-user
   */
  actorName?: string;
  /**
   * @remarks
   * The type of the executor. Valid values: HUMAN (user) and AGENT (agent).
   * 
   * @example
   * HUMAN
   */
  actorType?: string;
  /**
   * @remarks
   * The number of affected rows.
   * 
   * @example
   * 0
   */
  affectedRows?: number;
  /**
   * @remarks
   * The ID of the user to which the agent belongs. The ID starts with usr_.
   * 
   * @example
   * usr_10001
   */
  agentOwnerId?: string;
  /**
   * @remarks
   * The Catalog UUID to which the current execution belongs.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The IP address of the client that initiates the execution, excluding the port. This parameter is empty in workflow scenarios or when not recorded.
   * 
   * @example
   * 203.0.113.10
   */
  clientIp?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement.
   * 
   * @example
   * 12
   */
  cost?: number;
  /**
   * @remarks
   * The search name of the database.
   * 
   * @example
   * demo_db
   */
  databaseSearchName?: string;
  /**
   * @remarks
   * The Database UUID to which the current execution belongs.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The error message when the execution fails.
   * 
   * @example
   * syntax error
   */
  error?: string;
  /**
   * @remarks
   * The actually executed SQL statement.
   * 
   * @example
   * SELECT 1
   */
  executedSql?: string;
  /**
   * @remarks
   * The execution status. Valid values: SUCCESS, FAILED, and BLOCKED (intercepted or not actually executed).
   * 
   * @example
   * SUCCESS
   */
  executionStatus?: string;
  /**
   * @remarks
   * The original SQL statement.
   * 
   * @example
   * SELECT 1
   */
  originalSql?: string;
  /**
   * @remarks
   * The query ID of the current execution.
   * 
   * @example
   * trace-10001
   */
  queryId?: string;
  /**
   * @remarks
   * The number of returned rows.
   * 
   * @example
   * 1
   */
  returnedRows?: number;
  /**
   * @remarks
   * The execution scenario. Valid values: AGENT_QUERY (the agent directly executes the SQL statement) and WORKFLOW_QUERY (the SQL statement is asynchronously executed through a workflow).
   * 
   * @example
   * AGENT_QUERY
   */
  scenario?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The workflow ID. This parameter may be empty in non-workflow scenarios.
   * 
   * @example
   * wf-10001
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      actorId: 'ActorId',
      actorName: 'ActorName',
      actorType: 'ActorType',
      affectedRows: 'AffectedRows',
      agentOwnerId: 'AgentOwnerId',
      catalogUuid: 'CatalogUuid',
      clientIp: 'ClientIp',
      cost: 'Cost',
      databaseSearchName: 'DatabaseSearchName',
      databaseUuid: 'DatabaseUuid',
      error: 'Error',
      executedSql: 'ExecutedSql',
      executionStatus: 'ExecutionStatus',
      originalSql: 'OriginalSql',
      queryId: 'QueryId',
      returnedRows: 'ReturnedRows',
      scenario: 'Scenario',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actorId: 'string',
      actorName: 'string',
      actorType: 'string',
      affectedRows: 'number',
      agentOwnerId: 'string',
      catalogUuid: 'string',
      clientIp: 'string',
      cost: 'number',
      databaseSearchName: 'string',
      databaseUuid: 'string',
      error: 'string',
      executedSql: 'string',
      executionStatus: 'string',
      originalSql: 'string',
      queryId: 'string',
      returnedRows: 'number',
      scenario: 'string',
      sqlType: 'string',
      startTime: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgenticGlobalSqlExecutionHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SQL execution history.
   */
  data?: ListAgenticGlobalSqlExecutionHistoriesResponseBodyData[];
  /**
   * @remarks
   * The error code. This parameter is empty when the request is successful.
   * 
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * Invalid endTime format, expected yyyy-MM-dd HH:mm:ss
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34E01EDD-6A16-4CF0-9541-C644D1BE01AA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgenticGlobalSqlExecutionHistoriesResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

