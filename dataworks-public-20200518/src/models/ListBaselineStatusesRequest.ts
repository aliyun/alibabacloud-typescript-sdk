// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY. The value DAILY indicates that the baseline is scheduled by day. The value HOURLY indicates that the baseline is scheduled by hour. Multiple types are separated by commas (,).
   * 
   * @example
   * DAILY,HOURLY
   */
  baselineTypes?: string;
  /**
   * @remarks
   * The data timestamp of the baseline instance. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-07T00:00:00+0800
   */
  bizdate?: string;
  /**
   * @remarks
   * The status of the baseline instance. Valid values: UNFINISH and FINISH. The value UNFINISH indicates that the baseline instance is still running. The value FINISH indicates that the baseline instance finishes running. Multiple states are separated by commas (,).
   * 
   * @example
   * FINISH,UNFINISH
   */
  finishStatus?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner.
   * 
   * @example
   * 9527952795****
   */
  owner?: string;
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 30. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 3, 5, 7, and 8. Multiple priorities are separated by commas (,).
   * 
   * @example
   * 1,3,5,7,8
   */
  priority?: string;
  /**
   * @remarks
   * The keyword of the baseline name used to search for the baseline.
   * 
   * @example
   * Keyword of the baseline name
   */
  searchText?: string;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGEROUS, and OVER. The value ERROR indicates that no nodes are associated with the baseline, or all nodes associated with the baseline are suspended. The value SAFE indicates that nodes finish running before the alerting time. The value DANGEROUS indicates that nodes are still running after the alerting time but before the committed completion time. The value OVER indicates that nodes are still running after the committed completion time. Multiple states are separated by commas (,).
   * 
   * @example
   * SAFE,DANGROUS,OVER
   */
  status?: string;
  /**
   * @remarks
   * The ID of the event.
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

