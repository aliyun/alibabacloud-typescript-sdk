// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersOfSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the phone number is active. This parameter is optional. The default value is empty, which means no filtering is applied.
   * 
   * @example
   * true
   */
  active?: boolean;
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
   * Indicates whether the phone numbers are associated with the skill group. If true, the API queries the list of phone numbers already associated with the specified SkillGroupId. If false, the API queries the list of phone numbers that can be associated with the specified SkillGroupId but are not currently associated. This parameter is typically used together with the AddNumbersToSkillGroup API.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isMember?: boolean;
  /**
   * @remarks
   * Page number for paging. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size for paging. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs Fuzzy Matching on phone numbers. This parameter is optional. The default value is empty, which means no filtering is applied.
   * 
   * @example
   * 0833
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
      active: 'Active',
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
      active: 'boolean',
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

