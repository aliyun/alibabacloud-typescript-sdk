// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsResponseBodyItemsTeamMembers extends $dara.Model {
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * my-team
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the team administrator.
   * 
   * @example
   * admin-user
   */
  adminName?: string;
  /**
   * @remarks
   * The time when the team was created.
   * 
   * @example
   * 2026-07-01T12:00:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The team description.
   * 
   * @example
   * This is a team.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * agentteams-test-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the team leader.
   * 
   * @example
   * leader-user
   */
  leaderName?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * my-team
   */
  name?: string;
  /**
   * @remarks
   * The running status of the team. This parameter is empty when the team is running normally.
   * 
   * @example
   * Deleting
   */
  status?: string;
  /**
   * @remarks
   * The list of team members.
   * 
   * @example
   * [...]
   */
  teamMembers?: ListTeamsResponseBodyItemsTeamMembers[];
  /**
   * @remarks
   * The list of Worker names associated with the team.
   * 
   * @example
   * ["worker-1"]
   */
  workerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      createdAt: 'CreatedAt',
      description: 'Description',
      instanceId: 'InstanceId',
      leaderName: 'LeaderName',
      name: 'Name',
      status: 'Status',
      teamMembers: 'TeamMembers',
      workerNames: 'WorkerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      createdAt: 'string',
      description: 'string',
      instanceId: 'string',
      leaderName: 'string',
      name: 'string',
      status: 'string',
      teamMembers: { 'type': 'array', 'itemType': ListTeamsResponseBodyItemsTeamMembers },
      workerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.teamMembers)) {
      $dara.Model.validateArray(this.teamMembers);
    }
    if(Array.isArray(this.workerNames)) {
      $dara.Model.validateArray(this.workerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamsResponseBody extends $dara.Model {
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
   * The list of team summaries.
   * 
   * @example
   * [...]
   */
  items?: ListTeamsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
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
   * req-list-teams-001
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
   * The total number of records that match the specified conditions.
   * 
   * @example
   * 25
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
      items: { 'type': 'array', 'itemType': ListTeamsResponseBodyItems },
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

