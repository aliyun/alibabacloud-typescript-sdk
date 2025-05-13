// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstanceResponseBodyDataWfInstanceInfos extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the workflow instance.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the workflow instance stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the workflow instance was scheduled to run.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the workflow instance started to run.
   * 
   * @example
   * 2023-01-03 18:00:01
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the workflow instance. Valid values:
   * 
   * *   1: pending
   * *   2: preparing
   * *   3: running
   * *   4: successful
   * *   5: failed
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 123456
   */
  wfInstanceId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

