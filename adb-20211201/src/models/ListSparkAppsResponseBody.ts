// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAppInfo } from "./SparkAppInfo";


export class ListSparkAppsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application information list. Returned parameter descriptions:
   * - **Data**: The Spark application template data.
   * - **EstimateExecutionCpuTimeInSeconds**: The CPU time consumed to execute the Spark application, in milliseconds.
   * - **LogRootPath**: The storage path of log files.
   * - **LastAttemptId**: The retry ID.
   * - **WebUiAddress**: The Web UI address.
   * - **SubmittedTimeInMillis**: The time when the Spark application was committed. The value is a UNIX timestamp in milliseconds.
   * - **StartedTimeInMillis**: The time when the Spark application was created. The value is a UNIX timestamp in milliseconds.
   * - **LastUpdatedTimeInMillis**: The time when the Spark application was last updated. The value is a UNIX timestamp in milliseconds.
   * - **TerminatedTimeInMillis**: The time when the execution of the Spark application was stopped. The value is a UNIX timestamp in milliseconds.
   * - **DBClusterId**: The ID of the cluster where the Spark application is executed.
   * - **ResourceGroupName**: The name of the job resource group.
   * - **DurationInMillis**: The execution duration of the Spark application, in milliseconds.
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

