// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the message group.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   0: ascending order by time
   * *   1: descending order by time
   * 
   * @example
   * 1
   */
  sortType?: number;
  /**
   * @remarks
   * The type of the custom message. Valid values: integers greater than 10000.
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

