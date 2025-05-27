// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkFnfParametersExecutionName } from "./CreateEventStreamingRequestSinkSinkFnfParametersExecutionName";
import { CreateEventStreamingRequestSinkSinkFnfParametersFlowName } from "./CreateEventStreamingRequestSinkSinkFnfParametersFlowName";
import { CreateEventStreamingRequestSinkSinkFnfParametersInput } from "./CreateEventStreamingRequestSinkSinkFnfParametersInput";
import { CreateEventStreamingRequestSinkSinkFnfParametersRoleName } from "./CreateEventStreamingRequestSinkSinkFnfParametersRoleName";


export class CreateEventStreamingRequestSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: CreateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: CreateEventStreamingRequestSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The input information of the execution.
   */
  input?: CreateEventStreamingRequestSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
   */
  roleName?: CreateEventStreamingRequestSinkSinkFnfParametersRoleName;
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
      executionName: CreateEventStreamingRequestSinkSinkFnfParametersExecutionName,
      flowName: CreateEventStreamingRequestSinkSinkFnfParametersFlowName,
      input: CreateEventStreamingRequestSinkSinkFnfParametersInput,
      roleName: CreateEventStreamingRequestSinkSinkFnfParametersRoleName,
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

