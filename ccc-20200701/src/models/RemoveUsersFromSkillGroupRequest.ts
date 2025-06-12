// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersFromSkillGroupRequest extends $dara.Model {
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
   * ["agent1@ccc-test","agent2@ccc-test"]
   */
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

