// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiSparkApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is submitted by using a Kyuubi gateway.
   * 
   * @example
   * spark-339f844005b6404c95f9f7c7a13b****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the Spark application that is submitted by using a Kyuubi gateway.
   * 
   * @example
   * kyuubi-connection-spark-sql-anonymous-fa9a5e73-b4b1-474a-b****
   */
  applicationName?: string;
  /**
   * @remarks
   * The number of CUs consumed during a specified cycle of a task. The value is an estimated value. Refer to your Alibaba Cloud bill for the actual number of consumed CUs.
   * 
   * @example
   * 0.238302
   */
  cuHours?: number;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2025-02-12 20:02:02
   */
  endTime?: string;
  /**
   * @remarks
   * The total amount of memory allocated to the job multiplied by the running duration (seconds).
   * 
   * @example
   * 3513900
   */
  mbSeconds?: number;
  /**
   * @remarks
   * The name of the resource queue on which the Spark jobs run.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2025-02-12 19:59:16
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the Spark application.
   * 
   * *   STARTING
   * *   RUNNING
   * *   TERMINATED
   * 
   * @example
   * STARTING
   */
  state?: string;
  /**
   * @remarks
   * The total number of CPU cores allocated to the job multiplied by the running duration (seconds).
   * 
   * @example
   * 780
   */
  vcoreSeconds?: number;
  /**
   * @remarks
   * The URL of the web UI for the Spark application.
   */
  webUI?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'applicationId',
      applicationName: 'applicationName',
      cuHours: 'cuHours',
      endTime: 'endTime',
      mbSeconds: 'mbSeconds',
      resourceQueueId: 'resourceQueueId',
      startTime: 'startTime',
      state: 'state',
      vcoreSeconds: 'vcoreSeconds',
      webUI: 'webUI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      cuHours: 'number',
      endTime: 'string',
      mbSeconds: 'number',
      resourceQueueId: 'string',
      startTime: 'string',
      state: 'string',
      vcoreSeconds: 'number',
      webUI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

