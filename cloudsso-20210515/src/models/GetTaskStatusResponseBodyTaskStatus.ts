// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatusResponseBodyTaskStatus extends $dara.Model {
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-11-05T02:58:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cause of the task failure.
   * 
   * >  This parameter is returned only when the value of `Status` is `Failed`.
   * 
   * @example
   * No Permission.
   */
  failureReason?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2021-11-05T02:58:07Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shfqw1u1edszvxw5****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   ProvisionAccessConfiguration: An access configuration is provisioned.
   * *   DeprovisionAccessConfiguration: An access configuration is de-provisioned.
   * *   CreateAccessAssignment: Access permissions on an account in the resource directory are assigned.
   * *   DeleteAccessAssignment: Access permissions on an account in the resource directory are removed.
   * 
   * @example
   * DeleteAccessAssignment
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      failureReason: 'FailureReason',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failureReason: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

