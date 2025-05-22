// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodyAnalysisJobProgress } from "./DescribePreCheckStatusResponseBodyAnalysisJobProgress";
import { DescribePreCheckStatusResponseBodyFullNetCheckJobStatus } from "./DescribePreCheckStatusResponseBodyFullNetCheckJobStatus";
import { DescribePreCheckStatusResponseBodyJobProgress } from "./DescribePreCheckStatusResponseBodyJobProgress";
import { DescribePreCheckStatusResponseBodyNetworkDiagnosisResult } from "./DescribePreCheckStatusResponseBodyNetworkDiagnosisResult";
import { DescribePreCheckStatusResponseBodySubDistributedJobStatus } from "./DescribePreCheckStatusResponseBodySubDistributedJobStatus";


export class DescribePreCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Display list of evaluation tasks
   */
  analysisJobProgress?: DescribePreCheckStatusResponseBodyAnalysisJobProgress[];
  /**
   * @remarks
   * The task code that indicates the type of the subtask. Valid values:
   * 
   * *   **01**: precheck.
   * *   **02**: schema migration or initial schema synchronization.
   * *   **03**: full data migration or initial full data synchronization.
   * *   **04**: incremental data migration or synchronization.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * Number of failed evaluation items
   * 
   * @example
   * 0
   */
  errorAnalysisItem?: number;
  /**
   * @remarks
   * The total number of subtask failures.
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * Network-wide inspection results.
   */
  fullNetCheckJobStatus?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatus[];
  /**
   * @remarks
   * The status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * @example
   * b4my3zg929a****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * dtstest
   */
  jobName?: string;
  /**
   * @remarks
   * The subtasks and the progress of each subtask.
   */
  jobProgress?: DescribePreCheckStatusResponseBodyJobProgress[];
  /**
   * @remarks
   * Network diagnosis result
   */
  networkDiagnosisResult?: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
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
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C096FA97-B6BA-4575-899D-61E12B59****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the subtask. Valid values:
   * 
   * *   **NotStarted**: The subtask is not started.
   * *   **Suspending**: The subtask is paused.
   * *   **Checking**: The subtask is being checked.
   * *   **Migrating**: The subtask is in progress. Data is being migrated.
   * *   **Failed**: The subtask failed.
   * *   **Catched**: The subtask is in progress. Incremental data is being migrated or synchronized.
   * *   **Finished**: The subtask is complete.
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The information about the distributed subtasks.
   */
  subDistributedJobStatus?: DescribePreCheckStatusResponseBodySubDistributedJobStatus[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of subtasks.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      analysisJobProgress: 'AnalysisJobProgress',
      code: 'Code',
      errorAnalysisItem: 'ErrorAnalysisItem',
      errorItem: 'ErrorItem',
      fullNetCheckJobStatus: 'FullNetCheckJobStatus',
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      networkDiagnosisResult: 'NetworkDiagnosisResult',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      state: 'State',
      subDistributedJobStatus: 'SubDistributedJobStatus',
      success: 'Success',
      total: 'Total',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyAnalysisJobProgress },
      code: 'string',
      errorAnalysisItem: 'number',
      errorItem: 'number',
      fullNetCheckJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatus },
      httpStatusCode: 'number',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyJobProgress },
      networkDiagnosisResult: DescribePreCheckStatusResponseBodyNetworkDiagnosisResult,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      state: 'string',
      subDistributedJobStatus: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodySubDistributedJobStatus },
      success: 'boolean',
      total: 'number',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.analysisJobProgress)) {
      $dara.Model.validateArray(this.analysisJobProgress);
    }
    if(Array.isArray(this.fullNetCheckJobStatus)) {
      $dara.Model.validateArray(this.fullNetCheckJobStatus);
    }
    if(Array.isArray(this.jobProgress)) {
      $dara.Model.validateArray(this.jobProgress);
    }
    if(this.networkDiagnosisResult && typeof (this.networkDiagnosisResult as any).validate === 'function') {
      (this.networkDiagnosisResult as any).validate();
    }
    if(Array.isArray(this.subDistributedJobStatus)) {
      $dara.Model.validateArray(this.subDistributedJobStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

