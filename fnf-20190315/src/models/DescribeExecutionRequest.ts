// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The maximum period of time for long polling waits. Valid values: 0 to 60. Unit: seconds. Configure this parameter based on the following rules:
   * 
   * *   If the value is 0, the system immediately returns the current execution status.
   * *   If the value is greater than 0, the long polling request waits until the execution ends or the specified period elapses.
   * 
   * @example
   * 20
   */
  waitTimeSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      waitTimeSeconds: 'WaitTimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      waitTimeSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

