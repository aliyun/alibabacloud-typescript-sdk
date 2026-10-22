// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFaqShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique identifier of the category.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * The start of the creation time range.
   * 
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @remarks
   * The end of the creation time range.
   * 
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @remarks
   * The start of the expiration time range.
   * 
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @remarks
   * The end of the expiration time range.
   * 
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * Search title
   */
  keyword?: string;
  /**
   * @remarks
   * The start of the modification time range.
   * 
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @remarks
   * The end of the modification time range.
   * 
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * test01
   */
  modifyUserName?: string;
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
   * The search scope. Valid values:
   * 
   * - 1: Search titles and similar questions.
   * - 2: Search answers.
   * - 3: Search all.
   * 
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @remarks
   * The start of the effective time range.
   * 
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @remarks
   * The end of the effective time range.
   * 
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @remarks
   * The knowledge status. Valid values:
   * 
   * - -1: deleted and unpublished.
   * - 1: unpublished.
   * - 2: published.
   * - 3: updated and unpublished.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIdsShrink: 'CategoryIds',
      createTimeBegin: 'CreateTimeBegin',
      createTimeEnd: 'CreateTimeEnd',
      createUserName: 'CreateUserName',
      endTimeBegin: 'EndTimeBegin',
      endTimeEnd: 'EndTimeEnd',
      keyword: 'Keyword',
      modifyTimeBegin: 'ModifyTimeBegin',
      modifyTimeEnd: 'ModifyTimeEnd',
      modifyUserName: 'ModifyUserName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryIdsShrink: 'string',
      createTimeBegin: 'string',
      createTimeEnd: 'string',
      createUserName: 'string',
      endTimeBegin: 'string',
      endTimeEnd: 'string',
      keyword: 'string',
      modifyTimeBegin: 'string',
      modifyTimeEnd: 'string',
      modifyUserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

