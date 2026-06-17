// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCronJobPolicyServerlessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action of the scheduled task. The value is fixed as `ModifyDBClusterServerlessConf`.
   * 
   * @example
   * ModifyDBClusterServerlessConf
   */
  action?: string;
  /**
   * @remarks
   * The Cron expression.
   * 
   * @example
   * 0 0 8 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the task. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and in UTC.
   * 
   * @example
   * 2021-04-07T04:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * 1fa3c0e7-b568-4f41-b703-463c96a91bd8
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45D24263-7E3A-4140-9472-************
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the task. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and in UTC.
   * 
   * @example
   * 2020-05-01T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - `working`: The scheduled task is running.
   * 
   * - `finish`: The scheduled task is complete.
   * 
   * @example
   * working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobId: 'JobId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      cronExpression: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      jobId: 'string',
      regionId: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

