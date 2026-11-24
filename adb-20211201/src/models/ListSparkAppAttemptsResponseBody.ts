// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAttemptInfo } from "./SparkAttemptInfo";


export class ListSparkAppAttemptsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The retry information list. Response parameter description:
   * - **AttemptId**: The retry ID.
   * - **State**: The execution state of the application. Valid values:
   *     - **SUBMITTED**: Submitted.
   *     - **STARTING**: Starting.
   *     - **RUNNING**: Running.
   *     - **FAILING**: The task failed. Cleaning up the environment.
   *     - **FAILED**: Failed.
   *     - **KILLING**: Aborting the task. Cleaning up the environment.
   *     - **KILLED**: The task aborted.
   *     - **SUCCEEDING**: The task execution ended. Cleaning up the environment.
   *     - **COMPLETED**: The task execution ended.
   *     - **FATAL**: Unexpected failure.
   *     - **UNKNOWN**: Unknown error.
   * - **Message**: The alert information. If no alert is generated, an empty value is returned.
   * - **Data**: The Spark application template data.
   * - **EstimateExecutionCpuTimeInSeconds**: The CPU time consumed to execute the Spark application, in milliseconds.
   * - **LogRootPath**: The storage path of the log file.
   * - **LastAttemptId**: The ID of the last retry.
   * - **WebUiAddress**: The Web UI address.
   * - **SubmittedTimeInMillis**: The time when the Spark application was submitted. The value is a UNIX timestamp in milliseconds.
   * - **StartedTimeInMillis**: The time when the Spark application was created. The value is a UNIX timestamp in milliseconds.
   * - **LastUpdatedTimeInMillis**: The time when the Spark application was last updated. The value is a UNIX timestamp in milliseconds.
   * - **TerminatedTimeInMillis**: The time when the execution of the Spark application was stopped. The value is a UNIX timestamp in milliseconds.
   * - **DBClusterId**: The ID of the cluster where the Spark application is executed.
   * - **ResourceGroupName**: The name of the job resource group.
   * - **DurationInMillis**: The execution duration of the Spark application, in milliseconds.
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

