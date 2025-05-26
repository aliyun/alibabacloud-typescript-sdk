// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAppInfo } from "./SparkAppInfo";


export class ListSparkAppsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of the applications. Fields in the response parameter:
   * 
   * - **Data**: the data of the Spark application template.
   * - **EstimateExecutionCpuTimeInSeconds**: the amount of time it takes to consume CPU resources for running the Spark application. Unit: milliseconds.
   * - **LogRootPath**: the storage path of log files.
   * - **LastAttemptId**: the most recent attempt ID.
   * - **WebUiAddress**: the web UI URL.
   * - **SubmittedTimeInMillis**: the time when the Spark application was submitted. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **StartedTimeInMillis**: the time when the Spark application was created. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **TerminatedTimeInMillis**: the time when the Spark application task was terminated. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **DBClusterId**: the ID of the cluster on which the Spark application runs.
   * - **ResourceGroupName**: the name of the job resource group.
   * - **DurationInMillis**: the amount of time it takes to run the Spark application. Unit: milliseconds.
   */
  appInfoList?: SparkAppInfo[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': SparkAppInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

