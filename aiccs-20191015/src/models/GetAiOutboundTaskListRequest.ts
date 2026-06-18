// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for job creation. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1617761765000
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start time for job creation. The value is a UNIX timestamp in milliseconds.
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
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * agent_****
   */
  instanceId?: string;
  /**
   * @remarks
   * Page size. The value must be greater than **0**. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter condition.
   * 
   * > Matches job ID or performs fuzzy matching on job name.
   * 
   * @example
   * 1763****
   */
  searchKey?: string;
  /**
   * @remarks
   * Job status. Valid values:
   * 
   * - **0**: Not started.
   * - **1**: In progress.
   * - **2**: Paused by the system.
   * - **3**: Manually paused.
   * - **4**: Completed.
   * - **5**: Stopped.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Task Type. Valid values:
   * 
   * - **2**: Predictive outbound call.
   * - **3**: Automated outbound call.
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

