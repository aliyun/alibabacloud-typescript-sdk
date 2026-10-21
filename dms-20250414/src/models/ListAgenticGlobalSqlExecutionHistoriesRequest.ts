// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticGlobalSqlExecutionHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the actor. A user ID starts with usr_, and an agent ID starts with agt_. If you do not specify this parameter, all records within the current tenant are queried. If you specify a user ID, the records of the user and the agents under the user are included. If you specify an agent ID, only the records of the agent are matched. The actor must belong to the current tenant.
   * 
   * @example
   * usr_10001
   */
  actorId?: string;
  /**
   * @remarks
   * The name of the actor for exact match.
   * 
   * @example
   * demo-user
   */
  actorName?: string;
  /**
   * @remarks
   * The type of the actor for exact match. Valid values: HUMAN and AGENT.
   * 
   * @example
   * HUMAN
   */
  actorType?: string;
  /**
   * @remarks
   * The catalog UUID for exact match. You can obtain this value by calling ListAgenticCatalog or SearchAgenticCatalog.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The database UUID for exact match. You can obtain this value by calling ListAgenticDatabase or SearchAgenticDatabase.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-MM-dd HH:mm:ss format. If you do not specify this parameter, the default end time is the current time. If the format cannot be parsed or the end time is earlier than the start time, the request fails.
   * 
   * @example
   * 2026-06-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The execution scenario for exact match. Valid values:
   * - AGENT_QUERY: The agent directly executes the SQL statement.
   * - WORKFLOW_QUERY: The SQL statement is asynchronously executed through a workflow.
   * If you do not specify this parameter, both scenarios are queried.
   * 
   * @example
   * AGENT_QUERY
   */
  scenario?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The keyword for fuzzy match based on the original SQL statement.
   * 
   * @example
   * SELECT
   */
  sqlKeyword?: string;
  /**
   * @remarks
   * The SQL type for exact match.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-dd HH:mm:ss format. If you do not specify this parameter, the default time range is the last 7 days. If the specified time is earlier than 730 days ago or the format cannot be parsed, the query starts from 730 days ago.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      actorId: 'ActorId',
      actorName: 'ActorName',
      actorType: 'ActorType',
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      endTime: 'EndTime',
      page: 'Page',
      scenario: 'Scenario',
      size: 'Size',
      sqlKeyword: 'SqlKeyword',
      sqlType: 'SqlType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actorId: 'string',
      actorName: 'string',
      actorType: 'string',
      catalogUuid: 'string',
      databaseUuid: 'string',
      endTime: 'string',
      page: 'number',
      scenario: 'string',
      size: 'number',
      sqlKeyword: 'string',
      sqlType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

