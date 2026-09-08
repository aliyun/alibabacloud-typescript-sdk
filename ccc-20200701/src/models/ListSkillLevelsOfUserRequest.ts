// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillLevelsOfUserRequest extends $dara.Model {
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
   * Indicates whether to associate with the specified agent. If true, retrieves the skill levels of skill groups associated with the agent. If false, retrieves the list of skill groups that the agent can be associated with but is not currently associated with. The default value is true.
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
   * Perform fuzzy matching based on skill group name or display name. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * skillgroup
   */
  searchPattern?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
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

