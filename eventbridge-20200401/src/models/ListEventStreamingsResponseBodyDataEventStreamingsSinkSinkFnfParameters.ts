// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The input information of the execution.
   */
  input?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName;
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
      executionName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName,
      flowName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName,
      input: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName,
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

