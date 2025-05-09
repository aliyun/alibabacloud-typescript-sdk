// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance extends $dara.Model {
  /**
   * @remarks
   * The business time of the task flow. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-11-10 14:37:26
   */
  businessTime?: string;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 7***
   */
  dagId?: string;
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * Spark_SQL_test
   */
  dagName?: string;
  /**
   * @remarks
   * The version of the task flow.
   * 
   * @example
   * []
   */
  dagVersion?: string;
  /**
   * @remarks
   * The time when the execution of the task flow was complete. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-11-11 14:38:57
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the previously published version of the task flow.
   * 
   * @example
   * 2****
   */
  historyDagId?: number;
  /**
   * @remarks
   * The ID of the execution record.
   * 
   * @example
   * 9234
   */
  id?: number;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The name of the task flow owner.
   * 
   * @example
   * test_name
   */
  ownerName?: string;
  /**
   * @remarks
   * The status of the task flow. Valid values:
   * 
   * *   **0**: The task flow is waiting to be scheduled.
   * *   **1**: The task flow is being executed.
   * *   **2**: The task flow is paused.
   * *   **3**: The task flow failed.
   * *   **4**: The task flow is executed.
   * *   **5**: The task flow is complete.
   * 
   * @example
   * 4
   */
  status?: number;
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
   * The time when the execution of the task flow was start. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-11-11 14:35:57
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      dagId: 'DagId',
      dagName: 'DagName',
      dagVersion: 'DagVersion',
      endTime: 'EndTime',
      historyDagId: 'HistoryDagId',
      id: 'Id',
      message: 'Message',
      ownerName: 'OwnerName',
      status: 'Status',
      triggerType: 'TriggerType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      dagId: 'string',
      dagName: 'string',
      dagVersion: 'string',
      endTime: 'string',
      historyDagId: 'number',
      id: 'number',
      message: 'string',
      ownerName: 'string',
      status: 'number',
      triggerType: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

