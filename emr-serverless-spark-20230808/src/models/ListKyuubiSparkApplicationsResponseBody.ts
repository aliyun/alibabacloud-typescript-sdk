// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLog } from "./RunLog";
import { Tag } from "./Tag";


export class ListKyuubiSparkApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application submitted by Kyuubi.
   * 
   * @example
   * spark-339f844005b6404c95f9f7c7a13b****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the Spark application submitted by Kyuubi.
   * 
   * @example
   * kyuubi-connection-spark-sql-anonymous-fa9a5e73-b4b1-474a-b****
   */
  applicationName?: string;
  /**
   * @remarks
   * The number of CUs consumed during the task lifecycle. This is an estimated value. The final amount is subject to your bill.
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
   * The exit code.
   * 
   * @example
   * Exit Code: 137, Exit Reason: OOMKilled
   */
  exitReason?: string;
  /**
   * @example
   * kb-2b93ec*******c9440c
   */
  kyuubiServiceId?: string;
  /**
   * @remarks
   * The status of the last task execution in the session.
   * 
   * @example
   * SUCCESS
   */
  latestSqlStatementStatus?: string;
  /**
   * @remarks
   * The total memory allocated to the task in MB, multiplied by the number of seconds the task ran.
   * 
   * @example
   * 3513900
   */
  mbSeconds?: number;
  /**
   * @example
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The name of the resource queue where the Spark task runs.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  runLog?: RunLog;
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
   * - STARTING: The application is starting.
   * 
   * - RUNNING: The application is running.
   * 
   * - TERMINATED: The application is terminated.
   * 
   * @example
   * STARTING
   */
  state?: string;
  tags?: Tag[];
  /**
   * @remarks
   * The total vCores allocated to the task, multiplied by the number of seconds the task ran.
   * 
   * @example
   * 780
   */
  vcoreSeconds?: number;
  /**
   * @remarks
   * The URL of the Spark application UI.
   */
  webUI?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'applicationId',
      applicationName: 'applicationName',
      cuHours: 'cuHours',
      endTime: 'endTime',
      exitReason: 'exitReason',
      kyuubiServiceId: 'kyuubiServiceId',
      latestSqlStatementStatus: 'latestSqlStatementStatus',
      mbSeconds: 'mbSeconds',
      priority: 'priority',
      resourceQueueId: 'resourceQueueId',
      runLog: 'runLog',
      startTime: 'startTime',
      state: 'state',
      tags: 'tags',
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
      exitReason: 'string',
      kyuubiServiceId: 'string',
      latestSqlStatementStatus: 'string',
      mbSeconds: 'number',
      priority: 'string',
      resourceQueueId: 'string',
      runLog: RunLog,
      startTime: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      vcoreSeconds: 'number',
      webUI: 'string',
    };
  }

  validate() {
    if(this.runLog && typeof (this.runLog as any).validate === 'function') {
      (this.runLog as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKyuubiSparkApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of application details.
   */
  applications?: ListKyuubiSparkApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The maximum number of records returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListKyuubiSparkApplicationsResponseBodyApplications },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

