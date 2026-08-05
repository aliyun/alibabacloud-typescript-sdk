// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Interactive Messages application ID.
   * 
   * > You must correctly fill in this parameter to perform a normal query.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Page number. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of message groups to display per page. Default value: 20.
   * 
   * Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting method. Valid values:
   * 
   * - 0: Ascending order by time.
   * - 1: Descending order by time.
   * 
   * @example
   * 1
   */
  sortType?: number;
  /**
   * @remarks
   * User ID, which is customized by the user and must be unique within an AppId. Different users must use different UserIds.
   * 
   * > You must correctly fill in this parameter to perform a normal query.
   * 
   * @example
   * de1**a0
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

