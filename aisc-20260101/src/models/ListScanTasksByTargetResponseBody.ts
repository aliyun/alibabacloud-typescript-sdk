// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanTasksByTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task creation time, in milliseconds (Unix epoch milliseconds).
   * 
   * @example
   * 1735689600000
   */
  createTime?: number;
  /**
   * @remarks
   * The task end time, in milliseconds (Unix epoch milliseconds). This value is null if the task has not ended.
   * 
   * @example
   * 1735689600000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of samples that the task has executed.
   * 
   * @example
   * 80
   */
  executeCaseCount?: number;
  /**
   * @remarks
   * The risk level of the task result. This value is null if the task is not completed or no risk assessment has been generated.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The detection intensity of the task.
   * 
   * @example
   * 2
   */
  sampleLevel?: number;
  /**
   * @remarks
   * The scan type of the task. Historical tasks without a recorded scan type are normalized to attack.
   * 
   * @example
   * attack
   */
  scanType?: string;
  /**
   * @remarks
   * The unique identifier of the scan task. You can use this ID for result download and status tracking.
   * 
   * @example
   * task-abc123def4567
   */
  scannerTaskId?: string;
  /**
   * @remarks
   * The task message. This value contains the failure reason if the task failed, or is empty if the task succeeded or no message is available.
   * 
   * @example
   * Execution timed out
   */
  scannerTaskMessage?: string;
  /**
   * @remarks
   * The current status of the task.
   * 
   * @example
   * completed
   */
  scannerTaskStatus?: string;
  /**
   * @remarks
   * The task start time, in milliseconds (Unix epoch milliseconds). This value is null if the task has not started.
   * 
   * @example
   * 1735689600000
   */
  startTime?: number;
  /**
   * @remarks
   * The task name. If no name is specified during creation, the default value is "Target Scan - target name".
   * 
   * @example
   * Target Scan - My Bailian Target
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of samples that the task plans to execute.
   * 
   * @example
   * 120
   */
  totalCaseCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executeCaseCount: 'ExecuteCaseCount',
      riskLevel: 'RiskLevel',
      sampleLevel: 'SampleLevel',
      scanType: 'ScanType',
      scannerTaskId: 'ScannerTaskId',
      scannerTaskMessage: 'ScannerTaskMessage',
      scannerTaskStatus: 'ScannerTaskStatus',
      startTime: 'StartTime',
      taskName: 'TaskName',
      totalCaseCount: 'TotalCaseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      executeCaseCount: 'number',
      riskLevel: 'string',
      sampleLevel: 'number',
      scanType: 'string',
      scannerTaskId: 'string',
      scannerTaskMessage: 'string',
      scannerTaskStatus: 'string',
      startTime: 'number',
      taskName: 'string',
      totalCaseCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanTasksByTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of scan tasks on the current page.
   */
  data?: ListScanTasksByTargetResponseBodyData[];
  /**
   * @remarks
   * The normalized page number that actually takes effect. This value may differ from the input parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The normalized number of entries per page that actually takes effect. This value may differ from the input parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of scan tasks that match the filter conditions within the last 366-day window.
   * 
   * @example
   * 42
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
      data: { 'type': 'array', 'itemType': ListScanTasksByTargetResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

