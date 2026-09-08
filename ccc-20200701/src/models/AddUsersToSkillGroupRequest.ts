// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUsersToSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test1@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * A list of agent skill levels in the skill group, formatted as a JSON array string. Each array element is an object containing two fields: userId and skillLevel. The userId field specifies the ID of the agent to be added, and the skillLevel field specifies the agent\\"s skill level after joining the skill group. Skill levels range from 1 to 10; a lower value indicates stronger service capability and the ability to handle more calls per unit time.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"userId":"agent1@ccc-test","skillLevel":10},{"userId":"agent2@ccc-test","skillLevel":10}]
   */
  userSkillLevelList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userSkillLevelList: 'UserSkillLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userSkillLevelList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

