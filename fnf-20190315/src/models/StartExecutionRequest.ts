// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies that the **TaskToken**-related tasks are called back after the execution in the flow ends.
   * 
   * @example
   * 12
   */
  callbackFnFTaskToken?: string;
  /**
   * @remarks
   * The name of the execution. The execution name is unique within a workflow. Configure this parameter based on the following rules:
   * 
   * *   The name must start with a letter or an underscore (_).
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow to be executed.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The input of the execution, which is in the JSON format.
   * 
   * @example
   * {"key":"value"}
   */
  input?: string;
  /**
   * @example
   * 1
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      callbackFnFTaskToken: 'CallbackFnFTaskToken',
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      qualifier: 'Qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackFnFTaskToken: 'string',
      executionName: 'string',
      flowName: 'string',
      input: 'string',
      qualifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

