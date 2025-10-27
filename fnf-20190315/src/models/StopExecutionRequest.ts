// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The reason for stopping the execution. The value must be 1 to 4,096 characters in length.
   * 
   * @example
   * for test
   */
  cause?: string;
  /**
   * @remarks
   * The error code for stopping the execution. The error code must be 1 to 128 characters in length.
   * 
   * @example
   * nill
   */
  error?: string;
  /**
   * @remarks
   * The name of the execution to be stopped. You can call the **ListExecutions** operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow to be stopped. You can call the **ListFlows** operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      error: 'Error',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      error: 'string',
      executionName: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

