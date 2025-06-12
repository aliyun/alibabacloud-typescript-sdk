// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserLevelsOfSkillGroupResponseBodyDataList extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  ramId?: string;
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
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @example
   * 5
   */
  skillLevel?: number;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loginName: 'LoginName',
      ramId: 'RamId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      loginName: 'string',
      ramId: 'string',
      roleId: 'string',
      roleName: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'number',
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

