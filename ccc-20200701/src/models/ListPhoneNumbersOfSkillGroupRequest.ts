// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersOfSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
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
   * true
   */
  isMember?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0833
   */
  searchPattern?: string;
  /**
   * @remarks
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

