// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersResponseBodyDataListPersonalOutboundNumberList } from "./ListUsersResponseBodyDataListPersonalOutboundNumberList";
import { ListUsersResponseBodyDataListSkillLevelList } from "./ListUsersResponseBodyDataListSkillLevelList";


export class ListUsersResponseBodyDataList extends $dara.Model {
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
   * 8031****
   */
  extension?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  personalOutboundNumberList?: ListUsersResponseBodyDataListPersonalOutboundNumberList[];
  primary?: boolean;
  /**
   * @example
   * false
   */
  primaryAccount?: boolean;
  /**
   * @example
   * 21234502254620****
   */
  ramId?: number;
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
  skillLevelList?: ListUsersResponseBodyDataListSkillLevelList[];
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
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      loginName: 'LoginName',
      mobile: 'Mobile',
      personalOutboundNumberList: 'PersonalOutboundNumberList',
      primary: 'Primary',
      primaryAccount: 'PrimaryAccount',
      ramId: 'RamId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      skillLevelList: 'SkillLevelList',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      loginName: 'string',
      mobile: 'string',
      personalOutboundNumberList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListPersonalOutboundNumberList },
      primary: 'boolean',
      primaryAccount: 'boolean',
      ramId: 'number',
      roleId: 'string',
      roleName: 'string',
      skillLevelList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListSkillLevelList },
      userId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.personalOutboundNumberList)) {
      $dara.Model.validateArray(this.personalOutboundNumberList);
    }
    if(Array.isArray(this.skillLevelList)) {
      $dara.Model.validateArray(this.skillLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

