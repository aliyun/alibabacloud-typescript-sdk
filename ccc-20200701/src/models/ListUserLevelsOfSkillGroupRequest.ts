// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserLevelsOfSkillGroupRequest extends $dara.Model {
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
   * Indicates whether to associate with the specified skill group. If the value is true, the operation retrieves the skill level list of agents associated with the skill group ID. If the value is false, the operation retrieves the list of agents that can be associated with but are not currently associated with the skill group ID. The default value is true.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isMember?: boolean;
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Perform fuzzy matching based on agent logon name or agent display name. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * 测试坐席
   */
  searchPattern?: string;
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
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
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

