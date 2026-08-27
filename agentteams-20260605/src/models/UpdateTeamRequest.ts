// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamRequestTeamMembers extends $dara.Model {
  /**
   * @remarks
   * The member name. The name must be an existing user under the instance.
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

export class UpdateTeamRequest extends $dara.Model {
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
   * The name.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The team member list. If specified, this overwrites the existing members entirely.
   * 
   * @example
   * [...]
   */
  teamMembers?: UpdateTeamRequestTeamMembers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      teamMembers: 'TeamMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      teamMembers: { 'type': 'array', 'itemType': UpdateTeamRequestTeamMembers },
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

