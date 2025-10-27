// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSyncExecutionResponseBodyEnvironmentVariables extends $dara.Model {
  /**
   * @example
   * key
   */
  name?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionResponseBodyEnvironment extends $dara.Model {
  variables?: StartSyncExecutionResponseBodyEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': StartSyncExecutionResponseBodyEnvironmentVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSyncExecutionResponseBody extends $dara.Model {
  environment?: StartSyncExecutionResponseBodyEnvironment;
  /**
   * @remarks
   * The error code that is returned if the execution failed.
   * 
   * @example
   * ActionNotSupported
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that indicates the execution timed out.
   * 
   * @example
   * Standard execution is not supported
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * my_flow_name
   */
  flowName?: string;
  /**
   * @remarks
   * The name of the execution.
   * 
   * @example
   * my_exec_name:{UUID}
   */
  name?: string;
  /**
   * @remarks
   * The output of the execution, which is in the JSON format.
   * 
   * @example
   * {"key":"value"}
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the execution started.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  startedTime?: string;
  /**
   * @remarks
   * The status of the execution. Valid values:
   * 
   * *   **Starting**
   * *   **Running**
   * *   **Stopped**
   * *   **Succeeded**
   * *   **Failed**
   * *   **TimedOut**
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The time when the execution stopped.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  stoppedTime?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      flowName: 'FlowName',
      name: 'Name',
      output: 'Output',
      requestId: 'RequestId',
      startedTime: 'StartedTime',
      status: 'Status',
      stoppedTime: 'StoppedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: StartSyncExecutionResponseBodyEnvironment,
      errorCode: 'string',
      errorMessage: 'string',
      flowName: 'string',
      name: 'string',
      output: 'string',
      requestId: 'string',
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
    };
  }

  validate() {
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

