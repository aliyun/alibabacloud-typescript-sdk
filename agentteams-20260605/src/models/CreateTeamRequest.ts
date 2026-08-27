// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamRequestTeamMembers extends $dara.Model {
  /**
   * @remarks
   * The member name. The member must be an existing user under the instance.
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

export class CreateTeamRequest extends $dara.Model {
  /**
   * @remarks
   * The team administrator name. The administrator must be an existing user under the instance with sufficient permissions.
   * 
   * @example
   * admin-user
   */
  adminName?: string;
  /**
   * @remarks
   * The idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
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
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The initial member list of the team.
   * 
   * @example
   * [...]
   */
  teamMembers?: CreateTeamRequestTeamMembers[];
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      teamMembers: 'TeamMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      teamMembers: { 'type': 'array', 'itemType': CreateTeamRequestTeamMembers },
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

