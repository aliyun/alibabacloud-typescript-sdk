// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDocShrinkRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  categoryIdsShrink?: string;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  createTimeBegin?: string;
  /**
   * @example
   * 2022-05-02T03:09:30Z
   */
  createTimeEnd?: string;
  createUserName?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  endTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  endTimeEnd?: string;
  keyword?: string;
  /**
   * @example
   * 2023-04-02T03:09:30Z
   */
  modifyTimeBegin?: string;
  /**
   * @example
   * 2023-05-02T03:09:30Z
   */
  modifyTimeEnd?: string;
  modifyUserName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @example
   * 1
   */
  searchScope?: number;
  /**
   * @example
   * 2022-04-02T03:09:30Z
   */
  startTimeBegin?: string;
  /**
   * @example
   * 2022-04-03T03:09:30Z
   */
  startTimeEnd?: string;
  /**
   * @example
   * 1
   */
  status?: number;
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

