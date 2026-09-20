// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY. Separate multiple values with commas (,).
   * 
   * @example
   * DAILY,HOURLY
   */
  baselineTypes?: string;
  /**
   * @remarks
   * The business date in UTC format (yyyy-MM-dd\\"T\\"HH:mm:ssZ).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-07T00:00:00+0800
   */
  bizdate?: string;
  /**
   * @remarks
   * The completion status of the baseline instance. Valid values: UNFINISH and FINISH. Separate multiple values with commas (,).
   * 
   * @example
   * FINISH,UNFINISH
   */
  finishStatus?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the baseline owner.
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1. Maximum value: 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 3, 5, 7, and 8. Separate multiple priorities with commas (,).
   * 
   * @example
   * 1,3,5,7,8
   */
  priority?: string;
  /**
   * @remarks
   * The search keyword. You can search by baseline name or baseline ID. If you enter an hourly baseline ID, all instances of that hourly baseline are returned.
   * 
   * @example
   * keyword
   */
  searchText?: string;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGROUS, and OVER. Separate multiple values with commas (,).
   * 
   * @example
   * SAFE,DANGROUS,OVER
   */
  status?: string;
  /**
   * @remarks
   * The ID of the related event.
   * 
   * @example
   * 1234
   */
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineTypes: 'BaselineTypes',
      bizdate: 'Bizdate',
      finishStatus: 'FinishStatus',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      searchText: 'SearchText',
      status: 'Status',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineTypes: 'string',
      bizdate: 'string',
      finishStatus: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'string',
      searchText: 'string',
      status: 'string',
      topicId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

