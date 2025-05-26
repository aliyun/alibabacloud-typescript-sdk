// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAttemptInfo } from "./SparkAttemptInfo";


export class ListSparkAppAttemptsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried attempts. Fields in the response parameter:
   * 
   * *   **AttemptId**: the attempt ID.
   * 
   * *   **State**: the state of the Spark application. Valid values:
   * 
   *     *   **SUBMITTED**
   *     *   **STARTING**
   *     *   **RUNNING**
   *     *   **FAILING**
   *     *   **FAILED**
   *     *   **KILLING**
   *     *   **KILLED**
   *     *   **SUCCEEDING**
   *     *   **COMPLETED**
   *     *   **FATAL**
   *     *   **UNKNOWN**
   * 
   * *   **Message**: the alert message that is returned. If no alert is generated, null is returned.
   * 
   * *   **Data** the data of the Spark application template.
   * 
   * *   **EstimateExecutionCpuTimeInSeconds**: the amount of time that is required to consume CPU resources for running the Spark application. Unit: milliseconds.
   * 
   * *   **LogRootPath**: the storage path of log files.
   * 
   * *   **LastAttemptId**: the ID of the last attempt.
   * 
   * *   **WebUiAddress**: the web UI URL.
   * 
   * *   **SubmittedTimeInMillis**: the time when the Spark application was submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **StartedTimeInMillis**: the time when the Spark application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **TerminatedTimeInMillis**: the time when the Spark application task was terminated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **DBClusterId**: the ID of the cluster on which the Spark application runs.
   * 
   * *   **ResourceGroupName**: the name of the job resource group.
   * 
   * *   **DurationInMillis**: the amount of time that is required to run the Spark application. Unit: milliseconds.
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
   * The total number of entries returned.
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

