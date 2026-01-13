// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLog } from "./RunLog";
import { Tag } from "./Tag";


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
   * @example
   * SUCCESS
   */
  latestSqlStatementStatus?: string;
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
   * *   STARTING
   * *   RUNNING
   * *   TERMINATED
   * 
   * @example
   * STARTING
   */
  state?: string;
  tags?: Tag[];
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
      exitReason: 'exitReason',
      kyuubiServiceId: 'kyuubiServiceId',
      latestSqlStatementStatus: 'latestSqlStatementStatus',
      mbSeconds: 'mbSeconds',
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
   * The details of the applications.
   */
  applications?: ListKyuubiSparkApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * The total number of entries returned.
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

