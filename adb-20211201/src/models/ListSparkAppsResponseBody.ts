// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAppInfo } from "./SparkAppInfo";


export class ListSparkAppsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of application information. Response parameter description:
   * - **Data**: the Spark application template data.
   * - **EstimateExecutionCpuTimeInSeconds**: the CPU time consumed to execute the Spark application, in milliseconds (ms).
   * - **LogRootPath**: the storage path of log files.
   * - **LastAttemptId**: the retry ID.
   * - **WebUiAddress**: the Web UI address.
   * - **SubmittedTimeInMillis**: the time when the Spark application was submitted, in UNIX timestamp format, in milliseconds (ms).
   * - **StartedTimeInMillis**: the time when the Spark application was created, in UNIX timestamp format, in milliseconds (ms).
   * - **LastUpdatedTimeInMillis**: the time when the Spark application was last updated, in UNIX timestamp format, in milliseconds (ms).
   * - **TerminatedTimeInMillis**: the time when the Spark application stopped execution, in UNIX timestamp format, in milliseconds (ms).
   * - **DBClusterId**: the ID of the cluster that executed the Spark application.
   * - **ResourceGroupName**: the name of the job resource group.
   * - **DurationInMillis**: the execution duration of the Spark application, in milliseconds (ms).
   */
  appInfoList?: SparkAppInfo[];
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

export class ListSparkAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSparkAppsResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSparkAppsResponseBodyData,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

