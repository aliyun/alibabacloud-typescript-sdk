// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticSqlExecutionHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the actor. User IDs start with usr_, and agent IDs start with agt_. If you do not specify this parameter, a user queries their own execution history and the execution history of their agents, while an agent queries only its own execution history. If you specify this parameter, exact matching is performed, and the value must be the ID of the current user or an agent owned by the current user.
   * 
   * @example
   * usr_10001
   */
  actorId?: string;
  /**
   * @remarks
   * The name of the actor for exact matching.
   * 
   * @example
   * demo-user
   */
  actorName?: string;
  /**
   * @remarks
   * The type of the actor for exact matching. Valid values: HUMAN and AGENT.
   * 
   * @example
   * HUMAN
   */
  actorType?: string;
  /**
   * @remarks
   * The catalog UUID for exact matching. You can obtain this value by calling ListAgenticCatalog or SearchAgenticCatalog.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The database UUID for exact matching. You can obtain this value by calling ListAgenticDatabase or SearchAgenticDatabase.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-MM-dd HH:mm:ss format. If you do not specify this parameter, the default value is the current time. If the format cannot be parsed or the end time is earlier than the start time, the request fails.
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
   * The execution scenario for exact matching. Valid values:
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
   * The keyword for fuzzy matching against the original SQL statement.
   * 
   * @example
   * SELECT
   */
  sqlKeyword?: string;
  /**
   * @remarks
   * The SQL type for exact matching.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-dd HH:mm:ss format. If you do not specify this parameter, the default time range is the last 7 days. If the specified time is more than 730 days ago or the format cannot be parsed, the query is performed for the last 730 days.
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

