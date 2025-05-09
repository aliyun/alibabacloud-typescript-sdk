// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to obtain the ID of the task flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 7***
   */
  dagId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query the execution records of the task flow. Specify the time in the yyyy-MM-DD format.
   * 
   * @example
   * 2022-01-07
   */
  startTimeBegin?: string;
  /**
   * @remarks
   * The end of the time range to query the execution records of the task flow. Specify the time in the yyyy-MM-DD format.
   * 
   * @example
   * 2022-04-08
   */
  startTimeEnd?: string;
  /**
   * @remarks
   * The running status of the task node. Valid values:
   * 
   * - **0**: Waiting for scheduling
   * 
   * - **1**: Running
   * 
   * - **2**: Suspend
   * 
   * - **3**: Failed to run
   * 
   * - **4**: Run successfully
   * 
   * - **5**: Completed
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The mode in which the task flow is triggered. Valid values:
   * 
   * *   **0**: The task flow is automatically triggered based on periodic scheduling.
   * *   **1**: The task flow is manually triggered.
   * 
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @remarks
   * Adjust filter conditions:
   * 
   * - true: StartTimeBegin and StartTimeEnd are the time range for filtering services.
   * 
   * - false: StartTimeBegin and StartTimeEnd are the time range for the task to run.
   * 
   * @example
   * true
   */
  useBizDate?: boolean;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      startTimeBegin: 'StartTimeBegin',
      startTimeEnd: 'StartTimeEnd',
      status: 'Status',
      tid: 'Tid',
      triggerType: 'TriggerType',
      useBizDate: 'UseBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      startTimeBegin: 'string',
      startTimeEnd: 'string',
      status: 'number',
      tid: 'number',
      triggerType: 'number',
      useBizDate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

