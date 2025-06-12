// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSkillGroupsToUserRequest extends $dara.Model {
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
   * [{"skillGroupId":"test1@ccc-test","skillLevel":5},{"skillGroupId":"test2@ccc-test","skillLevel":5}]
   */
  skillLevelList?: string;
  /**
   * @remarks
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

