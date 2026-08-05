// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The interactive message application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The message group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of users displayed per page. Default value: 20. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * - 0: ascending order by time.
   * 
   * - 1: descending order by time.
   * 
   * @example
   * 1
   */
  sortType?: number;
  /**
   * @remarks
   * The user-defined message type. The value must be greater than 10000.
   * 
   * @example
   * 10002
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

