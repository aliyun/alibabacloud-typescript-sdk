// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserLevelsOfSkillGroupRequest extends $dara.Model {
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
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * A JSON-formatted string representing an array of agent skill levels. Each array element is an object containing two fields: userId and skillLevel. Specify the agent ID in userId and the desired skill level in skillLevel. The skill level must be an integer from 1 to 10, where a lower value indicates stronger business capability and the ability to handle more calls per unit time.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"userId":"agent1@ccc-test","skillLevel":1},{"userId":"agent2@ccc-test","skillLevel":10}]
   */
  userLevelList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userLevelList: 'UserLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userLevelList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

