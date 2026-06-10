// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFaqRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the workspace. If this parameter is not specified, the default workspace is used. You can get the key on the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * An array of category IDs to filter the search results.
   */
  categoryIds?: number[];
  /**
   * @remarks
   * The start of the creation period.
   * 
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @remarks
   * The end of the creation period.
   * 
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The creator\\"s username.
   * 
   * @example
   * test01
   */
  createUserName?: string;
  /**
   * @remarks
   * The start of the expiration period.
   * 
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @remarks
   * The end of the expiration period.
   * 
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * 搜索标题
   */
  keyword?: string;
  /**
   * @remarks
   * The start of the modification period.
   * 
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @remarks
   * The end of the modification period.
   * 
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  /**
   * @remarks
   * The modifier\\"s username.
   * 
   * @example
   * test01
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The number of the page to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10, and the maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search scope.
   * 
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @remarks
   * The start of the effective period.
   * 
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @remarks
   * The end of the effective period.
   * 
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @remarks
   * The status of the knowledge item.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryIds: 'CategoryIds',
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
      categoryIds: { 'type': 'array', 'itemType': 'number' },
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
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

