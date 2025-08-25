// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRamUsersRequest extends $dara.Model {
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
   * ["28036411123456****","29234301123456****"]
   */
  ramIdList?: string;
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
   * [{"skillGroupId":"skillgroup@ccc-test","skillLevel":5}]
   */
  skillLevelList?: string;
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
      instanceId: 'InstanceId',
      ramIdList: 'RamIdList',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramIdList: 'string',
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

