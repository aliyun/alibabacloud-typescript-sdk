// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDocRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. You can obtain the key value from the business management page of the primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The list of category IDs.
   */
  categoryIds?: number[];
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
   * John
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
   * SearchKeyword
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
   * Jane
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - -1: queued
   * - 0: succeeded
   * - 1: parsing
   * - 2: processing
   * - 3: processing failed
   * 
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * The search scope. Valid values: 
   * - 1: search by title
   * - 2: search by content
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
   * The editing status. Valid values:
   * - 1: unpublished
   * - 2: published
   * - 3: updated but not published
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The list of label IDs. When multiple labels are specified, the union logic is used for filtering.
   */
  tagIds?: number[];
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
      processStatus: 'ProcessStatus',
      searchScope: 'SearchScope',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
      tagIds: 'TagIds',
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
      processStatus: 'number',
      searchScope: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
      tagIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

