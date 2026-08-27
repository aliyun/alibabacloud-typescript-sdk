// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamResponseBodyDataTeamMembers extends $dara.Model {
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

export class CreateTeamResponseBodyData extends $dara.Model {
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
  teamMembers?: CreateTeamResponseBodyDataTeamMembers[];
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      teamMembers: 'TeamMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      teamMembers: { 'type': 'array', 'itemType': CreateTeamResponseBodyDataTeamMembers },
    };
  }

  validate() {
    if(Array.isArray(this.teamMembers)) {
      $dara.Model.validateArray(this.teamMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTeamResponseBody extends $dara.Model {
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
  data?: CreateTeamResponseBodyData;
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
   * req-create-team-001
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
      data: CreateTeamResponseBodyData,
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

