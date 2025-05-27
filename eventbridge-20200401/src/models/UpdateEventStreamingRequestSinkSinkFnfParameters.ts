// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName } from "./UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName";
import { UpdateEventStreamingRequestSinkSinkFnfParametersFlowName } from "./UpdateEventStreamingRequestSinkSinkFnfParametersFlowName";
import { UpdateEventStreamingRequestSinkSinkFnfParametersInput } from "./UpdateEventStreamingRequestSinkSinkFnfParametersInput";
import { UpdateEventStreamingRequestSinkSinkFnfParametersRoleName } from "./UpdateEventStreamingRequestSinkSinkFnfParametersRoleName";


export class UpdateEventStreamingRequestSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The input information of the execution.
   */
  input?: UpdateEventStreamingRequestSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkFnfParametersRoleName;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName,
      flowName: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName,
      input: UpdateEventStreamingRequestSinkSinkFnfParametersInput,
      roleName: UpdateEventStreamingRequestSinkSinkFnfParametersRoleName,
    };
  }

  validate() {
    if(this.executionName && typeof (this.executionName as any).validate === 'function') {
      (this.executionName as any).validate();
    }
    if(this.flowName && typeof (this.flowName as any).validate === 'function') {
      (this.flowName as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.roleName && typeof (this.roleName as any).validate === 'function') {
      (this.roleName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

