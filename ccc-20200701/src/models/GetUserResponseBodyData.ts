// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyData extends $dara.Model {
  avatarUrl?: string;
  /**
   * @example
   * 8033****
   */
  deviceExt?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @example
   * OFFLINE
   */
  deviceState?: string;
  /**
   * @example
   * 1001
   */
  displayId?: string;
  displayName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 8003****
   */
  extension?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @example
   * 1391234****
   */
  mobile?: string;
  nickname?: string;
  /**
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @example
   * Admin
   */
  roleName?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      roleId: 'string',
      roleName: 'string',
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

