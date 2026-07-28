// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecuteStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Your account does not have enough balance to order postpaid product.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The run log.
   * 
   * @example
   * {"tf-plan.run.log":"xxx"}
   */
  logFile?: { [key: string]: any };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B4672AE3-C313-5B7A-BB24-45345570D398
   */
  requestId?: string;
  /**
   * @remarks
   * The state file content.
   * 
   * @example
   * {"version": 4, "terraform_version": "1.5.7", "serial": 3, "lineage": "cb71b0b2-1ec2-6483-d409-8cae23186ec6",  "outputs": {}, "resources": [], "check_results": null}
   */
  state?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - Pending: ready to start.
   * - PlanQueued: the plan task has been created but is waiting in the queue because no workflow is available.
   * - ApplyQueued: the apply task has been created but is waiting in the queue because no workflow is available.
   * - Planning: the plan phase is being executed.
   * - Planned: the plan execution is complete.
   * - Confirmed: the plan has been confirmed after execution.
   * - PlannedAndFinished: the plan execution is complete and no diff was found. The job is in a terminal state.
   * - Applying: the apply phase is being executed.
   * - Applied: the apply execution is complete.
   * - Discarded: the task has been discarded. This is a terminal state.
   * - Errored: the execution encountered an error. This is a terminal state.
   * - Canceled: the execution has been canceled. This is a terminal state.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      logFile: 'logFile',
      requestId: 'requestId',
      state: 'state',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      logFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.logFile) {
      $dara.Model.validateMap(this.logFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

