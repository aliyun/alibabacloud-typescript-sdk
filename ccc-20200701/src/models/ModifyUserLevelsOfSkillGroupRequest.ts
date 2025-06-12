// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserLevelsOfSkillGroupRequest extends $dara.Model {
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
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
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

