// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to asynchronously execute user assignment.
   */
  async?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of IDs of the Resource Access Management (RAM) users to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * ["28036411123456****","29234301123456****"]
   */
  ramIdList?: string;
  /**
   * @remarks
   * The role ID. This specifies the role of the agent in the instance after a successful import. Valid roles include administrator, skill group supervisor, and agent.
   * 
   * This parameter is required.
   * 
   * @example
   * Agent@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * The list of skill levels for skill groups. The value is a string in JSON array format. Each array element is an object that contains two fields: skillGroupId and skillLevel. Set skillGroupId to the ID of the skill group to which you want to associate the agent. Set skillLevel to the skill level of the agent in the skill group. Valid values: 1 to 10. A smaller value indicates a stronger business capability, allowing the agent to handle more calls per unit of time.
   * 
   * @example
   * [{"skillGroupId":"skillgroup@ccc-test","skillLevel":5}]
   */
  skillLevelList?: string;
  /**
   * @remarks
   * The work mode.
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

