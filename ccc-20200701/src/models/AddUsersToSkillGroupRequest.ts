// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUsersToSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
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

