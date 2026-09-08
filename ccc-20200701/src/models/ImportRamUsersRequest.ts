// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRamUsersRequest extends $dara.Model {
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
   * List of RAM user IDs to add.
   * 
   * This parameter is required.
   * 
   * @example
   * ["28036411123456****","29234301123456****"]
   */
  ramIdList?: string;
  /**
   * @remarks
   * Role ID. This is the agent\\"s role in the instance after successful import. Roles include administrator, skill group leader, and agent.
   * 
   * This parameter is required.
   * 
   * @example
   * Agent@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * Skill level list for the skill group. This is a JSON array string. Each array element is an object with two fields: skillGroupId and skillLevel. skillGroupId is the ID of the skill group the agent wants to associate with. skillLevel is the agent\\"s skill level in that skill group. The range is 1-10. A smaller value indicates stronger business capability and the ability to handle more calls per unit of time.
   * 
   * @example
   * [{"skillGroupId":"skillgroup@ccc-test","skillLevel":5}]
   */
  skillLevelList?: string;
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

