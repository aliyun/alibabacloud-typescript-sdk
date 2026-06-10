// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDocShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace key. If omitted, the default workspace is used. You can obtain this key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * A list of category IDs.
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
   * 张三
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
   * The search keyword.
   * 
   * @example
   * 搜索关键字
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
   * The name of the last modifier.
   * 
   * @example
   * 李四
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status.<br>Valid values:<br>• -1: Queued<br>• 0: Succeeded<br>• 1: Parsing<br>• 2: Processing<br>• 3: Failed<br><br><br><br><br><br>
   * 
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * The search scope.<br>Valid values:<br>• 1: Search titles<br>• 2: Search content<br><br><br>
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
   * The edit status.<br>Valid values:<br>• 1: Unpublished<br>• 2: Published<br>• 3: Updated but not published<br><br><br><br>
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * A list of tag IDs. If you provide multiple IDs, the operation returns documents that match at least one of the specified tags (logical OR).
   */
  tagIdsShrink?: string;
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
      processStatus: 'ProcessStatus',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
      tagIdsShrink: 'TagIds',
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
      processStatus: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
      tagIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

