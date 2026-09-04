// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in the skill name or skill description.
   * 
   * @example
   * weather
   */
  keyword?: string;
  /**
   * @remarks
   * The language type. The skill description is returned in this language.
   * 
   * Valid values:
   * 
   * - en: English.
   * - zh-CN: Chinese.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * sk-051j4pbwxzgol****
   */
  skillId?: string;
  /**
   * @remarks
   * The status filter.
   * 
   * @example
   * UPLOADED
   */
  statusFilter?: string;
  /**
   * @remarks
   * The skill type.
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillId: 'SkillId',
      statusFilter: 'StatusFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillId: 'string',
      statusFilter: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

