// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentResponseBodyExecutionResultListExecutionResult extends $dara.Model {
  /**
   * @remarks
   * The time when the installation was complete.
   * 
   * @example
   * 20**-11-10T07:02:17Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2ze7s2v0b789k*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The state of the installation.
   * 
   * @example
   * Finished
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The state of the installation command.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the installation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invokeRecordStatus: 'InvokeRecordStatus',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      instanceId: 'string',
      invokeRecordStatus: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBodyExecutionResultList extends $dara.Model {
  executionResult?: InstallAgentResponseBodyExecutionResultListExecutionResult[];
  static names(): { [key: string]: string } {
    return {
      executionResult: 'ExecutionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionResult: { 'type': 'array', 'itemType': InstallAgentResponseBodyExecutionResultListExecutionResult },
    };
  }

  validate() {
    if(Array.isArray(this.executionResult)) {
      $dara.Model.validateArray(this.executionResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The execution result.
   */
  executionResultList?: InstallAgentResponseBodyExecutionResultList;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executionResultList: 'ExecutionResultList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      executionResultList: InstallAgentResponseBodyExecutionResultList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.executionResultList && typeof (this.executionResultList as any).validate === 'function') {
      (this.executionResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

