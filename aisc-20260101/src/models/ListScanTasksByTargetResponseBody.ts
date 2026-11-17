// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanTasksByTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task. The value is a millisecond timestamp (Unix epoch in milliseconds).
   * 
   * @example
   * 1735689600000
   */
  createTime?: number;
  /**
   * @remarks
   * The end time of the task. The value is a millisecond timestamp (Unix epoch in milliseconds). If the task has not ended, the value is null.
   * 
   * @example
   * 1735689600000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of samples that have been executed for the task.
   * 
   * @example
   * 80
   */
  executeCaseCount?: number;
  /**
   * @remarks
   * The report language.
   * 
   * @example
   * zh
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The risk level of the task result. If the task is not completed or no risk assessment is generated, the value is null.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The sample language.
   * 
   * @example
   * zh
   */
  sampleLanguage?: string;
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
   * The scan mode of the task. For historical tasks that do not have a recorded scan mode, the value is normalized to attack.
   * 
   * @example
   * attack
   */
  scanType?: string;
  /**
   * @remarks
   * The unique identifier of the scan task. It can be used to download results and track status.
   * 
   * @example
   * task-abc123def4567
   */
  scannerTaskId?: string;
  /**
   * @remarks
   * The task message. If the task fails, this parameter indicates the cause of the failure. If the task succeeds or no message is available, this parameter is empty.
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
   * The actual execution mode used by the scan task, which is obtained from the scannerType field of the task. classic indicates the sample mode. agent indicates the autonomous multi-round attack mode of the agent. executor is a historical compatibility value, which is equivalent to classic.
   * 
   * @example
   * classic
   */
  scannerType?: string;
  /**
   * @remarks
   * The start time of the task. The value is a millisecond timestamp (Unix epoch in milliseconds). If the task has not started, the value is null.
   * 
   * @example
   * 1735689600000
   */
  startTime?: number;
  /**
   * @remarks
   * The name of the task. If no name is specified during creation, the default value is Target Scan - target name.
   * 
   * @example
   * Target Scan - My Model Studio target
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of samples planned to be executed for the task.
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
      reportLanguage: 'ReportLanguage',
      riskLevel: 'RiskLevel',
      sampleLanguage: 'SampleLanguage',
      sampleLevel: 'SampleLevel',
      scanType: 'ScanType',
      scannerTaskId: 'ScannerTaskId',
      scannerTaskMessage: 'ScannerTaskMessage',
      scannerTaskStatus: 'ScannerTaskStatus',
      scannerType: 'ScannerType',
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
      reportLanguage: 'string',
      riskLevel: 'string',
      sampleLanguage: 'string',
      sampleLevel: 'number',
      scanType: 'string',
      scannerTaskId: 'string',
      scannerTaskMessage: 'string',
      scannerTaskStatus: 'string',
      scannerType: 'string',
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
   * The actual effective page number after normalization. This value may not be equal to the input parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The actual effective number of entries per page after normalization. This value may not be equal to the input parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request. It is used for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of scan tasks that meet the filter conditions within the last 366 days.
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

