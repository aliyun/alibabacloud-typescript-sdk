// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTaskAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation date of the inspection task. The format is YYYY-MM-DD.
   * 
   * @example
   * 2024-06-01
   */
  createTime?: string;
  /**
   * @remarks
   * The cron expression for the scheduled inspection.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The IDs of the PolarDB clusters to be inspected. Separate multiple IDs with commas.
   * 
   * @example
   * pc-001,pc-002
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The expiration date of the inspection task. The format is YYYY-MM-DD.
   * 
   * @example
   * 2025-12-31
   */
  expireTime?: string;
  /**
   * @remarks
   * The last modification date of the inspection task. The format is YYYY-MM-DD.
   * 
   * @example
   * 2024-06-01
   */
  modifyTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The description of the inspection task.
   * 
   * @example
   * Scheduled inspection task
   */
  taskDescription?: string;
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * @example
   * task-001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cronExpression: 'CronExpression',
      DBClusterIds: 'DBClusterIds',
      expireTime: 'ExpireTime',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      taskDescription: 'TaskDescription',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cronExpression: 'string',
      DBClusterIds: 'string',
      expireTime: 'string',
      modifyTime: 'string',
      requestId: 'string',
      taskDescription: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

