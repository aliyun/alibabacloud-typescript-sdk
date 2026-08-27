// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamResponseBodyDataTeamMembers extends $dara.Model {
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * member-user
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

export class UpdateTeamResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The team administrator name.
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
   * Updated team description.
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
   * The team leader name.
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
   * The team member list.
   * 
   * @example
   * [...]
   */
  teamMembers?: UpdateTeamResponseBodyDataTeamMembers[];
  /**
   * @remarks
   * The time when the team was last updated.
   * 
   * @example
   * 2026-07-10T12:00:00
   */
  updatedAt?: string;
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
      teamMembers: 'TeamMembers',
      updatedAt: 'UpdatedAt',
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
      teamMembers: { 'type': 'array', 'itemType': UpdateTeamResponseBodyDataTeamMembers },
      updatedAt: 'string',
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

export class UpdateTeamResponseBody extends $dara.Model {
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
   * The response data.
   * 
   * @example
   * {}
   */
  data?: UpdateTeamResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-update-team-001
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTeamResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

