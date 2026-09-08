// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySkillLevelsOfUserRequest extends $dara.Model {
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
   * A JSON-formatted string representing an array of objects specifying skill levels for skill groups. Each array element is an object containing two fields: skillGroupId and skillLevel. Set skillGroupId to the ID of the skill group you want to modify, and set skillLevel to the desired skill level, which must be an integer from 1 to 10. A lower value indicates stronger business capability and the ability to handle more calls per unit time.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"skillGroupId":"skillgroup1@ccc-test","skillLevel":1},{"skillGroupId":"skillgroup2@ccc-test","skillLevel":10}]
   */
  skillLevelList?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillLevelList: 'SkillLevelList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillLevelList: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

