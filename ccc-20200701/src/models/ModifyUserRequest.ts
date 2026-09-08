// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserRequest extends $dara.Model {
  /**
   * @remarks
   * Agent profile picture URL.
   * 
   * @example
   * http://abc.com/sam.jpb
   */
  avatarUrl?: string;
  /**
   * @remarks
   * Agent ID (employee ID).
   * 
   * @example
   * 1001
   */
  displayId?: string;
  /**
   * @remarks
   * User\\"s full name.
   * 
   * @example
   * 张三疯
   */
  displayName?: string;
  /**
   * @remarks
   * Whether to force the modification.
   * 
   * @example
   * true
   */
  force?: boolean;
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
   * Agent\\"s personal phone number.
   * 
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @remarks
   * Agent nickname
   * 
   * @example
   * 老王
   */
  nickname?: string;
  /**
   * @remarks
   * Role ID, in the format: role\\@instance ID.
   * 
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user-test@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * Work mode.
   * 
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

