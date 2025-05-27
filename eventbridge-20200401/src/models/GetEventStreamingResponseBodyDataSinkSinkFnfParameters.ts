// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName } from "./GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName";
import { GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName } from "./GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName";
import { GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput } from "./GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput";
import { GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName } from "./GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName";


export class GetEventStreamingResponseBodyDataSinkSinkFnfParameters extends $dara.Model {
  /**
   * @remarks
   * The execution name.
   */
  executionName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName;
  /**
   * @remarks
   * The flow name.
   */
  flowName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName;
  /**
   * @remarks
   * The execution input information.
   */
  input?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput;
  /**
   * @remarks
   * The role name.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName;
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
      executionName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName,
      flowName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName,
      input: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput,
      roleName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName,
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

