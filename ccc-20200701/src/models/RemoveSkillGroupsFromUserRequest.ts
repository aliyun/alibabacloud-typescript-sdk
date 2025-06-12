// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSkillGroupsFromUserRequest extends $dara.Model {
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
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIdList?: string;
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
      skillGroupIdList: 'SkillGroupIdList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupIdList: 'string',
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

