// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignUsersRequest extends $dara.Model {
  async?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * A JSON array of RAM user IDs to import, formatted as a string.
   * 
   * This parameter is required.
   * 
   * @example
   * ["28036411123456****","29234301123456****"]
   */
  ramIdList?: string;
  /**
   * @remarks
   * The ID of the role to assign to the users in the instance. After the RAM users are imported, they are assigned this role. Valid roles are Administrator, Teamleader, and Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * Agent@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * A JSON array of skill objects, provided as a string. Each object specifies a skillGroupId and a skillLevel from 1 to 10. A lower skillLevel value indicates higher proficiency and greater call-handling capacity.
   * 
   * @example
   * [{"skillGroupId":"skillgroup@ccc-test","skillLevel":5}]
   */
  skillLevelList?: string;
  /**
   * @remarks
   * The work mode for the agents.
   * 
   * This parameter is required.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      instanceId: 'InstanceId',
      ramIdList: 'RamIdList',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      instanceId: 'string',
      ramIdList: 'string',
      roleId: 'string',
      skillLevelList: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

