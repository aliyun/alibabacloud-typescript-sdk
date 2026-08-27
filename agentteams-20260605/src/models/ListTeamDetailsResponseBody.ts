// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamDetailsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The URL of the team avatar.
   * 
   * @example
   * https://example.com/avatar.png
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The running status of the team.
   * 
   * @example
   * Deleting
   */
  status?: string;
  /**
   * @remarks
   * The task success rate. Valid values: 0 to 100.
   * 
   * @example
   * 95.5
   */
  successRate?: number;
  /**
   * @remarks
   * The number of tasks for the team.
   * 
   * @example
   * 12
   */
  taskCount?: number;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * my-team
   */
  teamName?: string;
  /**
   * @remarks
   * The token usage within the time interval.
   * 
   * @example
   * 1024000
   */
  tokenUsage?: number;
  /**
   * @remarks
   * The number of workers associated with the team.
   * 
   * @example
   * 3
   */
  workerCount?: number;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      status: 'Status',
      successRate: 'SuccessRate',
      taskCount: 'TaskCount',
      teamName: 'TeamName',
      tokenUsage: 'TokenUsage',
      workerCount: 'WorkerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      status: 'string',
      successRate: 'number',
      taskCount: 'number',
      teamName: 'string',
      tokenUsage: 'number',
      workerCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of team statistical details.
   * 
   * @example
   * [...]
   */
  items?: ListTeamDetailsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. This parameter is empty if no more data is available.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-list-team-details-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the conditions.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListTeamDetailsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

