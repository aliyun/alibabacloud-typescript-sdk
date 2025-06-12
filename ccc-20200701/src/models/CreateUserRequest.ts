// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  avatarUrl?: string;
  /**
   * @example
   * 1001
   */
  displayId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
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
   * agent
   */
  loginName?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  nickname?: string;
  /**
   * @example
   * false
   */
  resetPassword?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Agent@ccc-test
   */
  roleId?: string;
  /**
   * @example
   * [{"skillGroupId":"skillgroup1@ccc-test","skillLevel":1},{"skillGroupId":"skillgroup2@ccc-test","skillLevel":10}]
   */
  skillLevelList?: string;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      resetPassword: 'ResetPassword',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      resetPassword: 'boolean',
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

