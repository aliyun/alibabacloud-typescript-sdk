// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTestTaskResponseBodyExecutionDetails extends $dara.Model {
  /**
   * @remarks
   * The service test case name.
   * 
   * @example
   * case1
   */
  caseName?: string;
  /**
   * @remarks
   * The execution report
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
   * The sub task status.
   * 
   * @example
   * Runing
   */
  status?: string;
  /**
   * @remarks
   * The sub task id.
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
   * The execution details.
   */
  executionDetails?: GetServiceTestTaskResponseBodyExecutionDetails[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the service test task. Valid values:
   * 
   * *   Running
   * *   Success
   * *    Failure
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
   * nametest
   */
  taskName?: string;
  /**
   * @remarks
   * The task execution region.
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

