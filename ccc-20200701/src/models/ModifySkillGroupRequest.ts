// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the skill group. This parameter is optional and defaults to empty.
   * 
   * @example
   * 云联络中心的新测试技能组。
   */
  description?: string;
  /**
   * @remarks
   * Display name of the skill group, which must be 1 to 64 characters in length.
   * 
   * @example
   * 新测试技能组
   */
  displayName?: string;
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

