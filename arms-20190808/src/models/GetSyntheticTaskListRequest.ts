// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The order by which the queried tasks are sorted. Valid values:
   * 
   * *   **asc**: ascending
   * *   **desc**: descending
   * 
   * @example
   * asc
   */
  direction?: string;
  /**
   * @remarks
   * The condition by which the queried tasks are sorted.
   * 
   * @example
   * CreateTime
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
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
   * The region ID. Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * net-test
   */
  taskName?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: The task is stopped.
   * *   **1**: The task is started.
   * *   **9**: The task is ended.
   * 
   * @example
   * 1
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * 1.  3: web page performance - IE
   * 2.  34: web page performance - Chrome
   * 3.  0: network quality
   * 4.  40: file download
   * 5.  7: API performance
   * 
   * @example
   * 0
   */
  taskType?: string;
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
      taskStatus: 'string',
      taskType: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

