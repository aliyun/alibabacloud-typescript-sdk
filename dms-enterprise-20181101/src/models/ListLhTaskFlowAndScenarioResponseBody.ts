// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLhTaskFlowAndScenarioResponseBodyRawDAGList } from "./ListLhTaskFlowAndScenarioResponseBodyRawDaglist";
import { ListLhTaskFlowAndScenarioResponseBodyScenarioDAGList } from "./ListLhTaskFlowAndScenarioResponseBodyScenarioDaglist";


export class ListLhTaskFlowAndScenarioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task flows in the default business scenario.
   */
  rawDAGList?: ListLhTaskFlowAndScenarioResponseBodyRawDAGList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48602B78-0DDF-414C-8688-70CAB6070115
   */
  requestId?: string;
  /**
   * @remarks
   * The task flows in other business scenarios.
   */
  scenarioDAGList?: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGList;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      rawDAGList: 'RawDAGList',
      requestId: 'RequestId',
      scenarioDAGList: 'ScenarioDAGList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      rawDAGList: ListLhTaskFlowAndScenarioResponseBodyRawDAGList,
      requestId: 'string',
      scenarioDAGList: ListLhTaskFlowAndScenarioResponseBodyScenarioDAGList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.rawDAGList && typeof (this.rawDAGList as any).validate === 'function') {
      (this.rawDAGList as any).validate();
    }
    if(this.scenarioDAGList && typeof (this.scenarioDAGList as any).validate === 'function') {
      (this.scenarioDAGList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

