// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTestTaskResponseBodyExecutionDetails extends $dara.Model {
  /**
   * @remarks
   * The use case name.
   * 
   * @example
   * case1
   */
  caseName?: string;
  /**
   * @remarks
   * The execution report.
   * 
   * @example
   * -----------------------------------------------------------------------------
   * Region: cn-qingdao
   * StackName: iact3-default-cn-qingd
   * StackId: 009d2991-f494-d
   * *****************************************************************************
   */
  executionReport?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * Runing
   */
  status?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * stt-xxxx
   */
  subTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      caseName: 'CaseName',
      executionReport: 'ExecutionReport',
      status: 'Status',
      subTaskId: 'SubTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseName: 'string',
      executionReport: 'string',
      status: 'string',
      subTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTestTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution details of the task. This includes the running details for different use cases.
   */
  executionDetails?: GetServiceTestTaskResponseBodyExecutionDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The running status of the service test task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Automated test task 1
   */
  taskName?: string;
  /**
   * @remarks
   * The region where the task runs.
   * 
   * @example
   * cn-beijing
   */
  taskRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionDetails: 'ExecutionDetails',
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
      taskRegionId: 'TaskRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionDetails: { 'type': 'array', 'itemType': GetServiceTestTaskResponseBodyExecutionDetails },
      requestId: 'string',
      status: 'string',
      taskName: 'string',
      taskRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executionDetails)) {
      $dara.Model.validateArray(this.executionDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

