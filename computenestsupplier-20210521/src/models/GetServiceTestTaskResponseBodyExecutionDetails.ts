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

