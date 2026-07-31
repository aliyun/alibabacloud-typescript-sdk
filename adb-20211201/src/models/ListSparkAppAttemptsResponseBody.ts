// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAttemptInfo } from "./SparkAttemptInfo";


export class ListSparkAppAttemptsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of retry information. Metric description:
   * - **AttemptId**: the retry ID.
   * - **State**: the execute status of the application. Valid values:
   *     - **SUBMITTED**: commit.
   *     - **STARTING**: starting.
   *     - **RUNNING**: executing.
   *     - **FAILING**: the node failed and the environment is being cleaned up.
   *     - **FAILED**: failed.
   *     - **KILLING**: aborting the task and cleaning up the environment.
   *     - **KILLED**: the task is aborted.
   *     - **SUCCEEDING**: the node execution is complete and the environment is being cleaned up.
   *     - **COMPLETED**: the node execution is complete.
   *     - **FATAL**: unexpected failure.
   *     - **UNKNOWN**: unknown fault.
   * - **Message**: the alerting message. This parameter is empty if no alerting is generated.
   * - **Data**: the Spark application template data.
   * - **EstimateExecutionCpuTimeInSeconds**: the CPU time consumed to execute the Spark application, in milliseconds (ms).
   * - **LogRootPath**: the storage path of log files.
   * - **LastAttemptId**: the ID of the last retry.
   * - **WebUiAddress**: the web UI address.
   * - **SubmittedTimeInMillis**: the time when the Spark application was committed. This value is a UNIX timestamp in milliseconds (ms).
   * - **StartedTimeInMillis**: the time when the Spark application was created. This value is a UNIX timestamp in milliseconds (ms).
   * - **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. This value is a UNIX timestamp in milliseconds (ms).
   * - **TerminatedTimeInMillis**: the time when the Spark application stopped executing. This value is a UNIX timestamp in milliseconds (ms).
   * - **DBClusterId**: the ID of the cluster that executes the Spark application.
   * - **ResourceGroupName**: the name of the Job-type resource group.
   * - **DurationInMillis**: the execution duration of the Spark application, in milliseconds (ms).
   */
  attemptInfoList?: SparkAttemptInfo[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attemptInfoList: 'AttemptInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInfoList: { 'type': 'array', 'itemType': SparkAttemptInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attemptInfoList)) {
      $dara.Model.validateArray(this.attemptInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppAttemptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSparkAppAttemptsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSparkAppAttemptsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

