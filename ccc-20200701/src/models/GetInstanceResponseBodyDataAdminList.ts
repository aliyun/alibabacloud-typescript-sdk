// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataAdminList extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 8032****
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
   * 1382114****
   */
  mobile?: string;
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
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
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

