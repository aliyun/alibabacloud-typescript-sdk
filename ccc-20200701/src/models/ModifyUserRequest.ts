// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserRequest extends $dara.Model {
  avatarUrl?: string;
  /**
   * @example
   * 1001
   */
  displayId?: string;
  displayName?: string;
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  nickname?: string;
  /**
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user-test@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      force: 'Force',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      nickname: 'Nickname',
      roleId: 'RoleId',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayId: 'string',
      displayName: 'string',
      force: 'boolean',
      instanceId: 'string',
      mobile: 'string',
      nickname: 'string',
      roleId: 'string',
      userId: 'string',
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

