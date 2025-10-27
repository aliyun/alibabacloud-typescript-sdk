// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSyncExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the execution that you want to start. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * Different from the StartExecution operation, in the synchronous execution mode, the execution name is no longer required to be unique within a flow. You can choose to provide an execution name to identify the current execution. In this case, the system adds a UUID to the current execution name. The used format is {ExecutionName}:{UUID}. If you do not specify the execution name, the system automatically generates an execution name.
   * 
   * @example
   * my_exec_name
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow to be executed.
   * 
   * This parameter is required.
   * 
   * @example
   * my_flow_name
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
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      qualifier: 'Qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

