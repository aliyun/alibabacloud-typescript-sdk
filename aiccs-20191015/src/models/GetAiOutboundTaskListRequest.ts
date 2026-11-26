// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for task creation. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1617761765000
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start time for task creation. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1615083365000
   */
  createTimeStart?: number;
  /**
   * @remarks
   * The page number to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the instance ID in the <b>Instances</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * agent_****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The filter condition.
   * 
   * > Matches the task ID or performs a fuzzy match on the task name.
   * 
   * @example
   * 1763****
   */
  searchKey?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **0**: not started
   * - **1**: in progress
   * - **2**: paused by the system
   * - **3**: paused manually
   * - **4**: completed
   * - **5**: terminated
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **2**: predictive outbound call
   * - **3**: automatic outbound call
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      searchKey: 'string',
      status: 'number',
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

