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
   * The execution log.
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
   * The content of the state file.
   * 
   * @example
   * {"version": 4, "terraform_version": "1.5.7", "serial": 3, "lineage": "cb71b0b2-1ec2-6483-d409-8cae23186ec6",  "outputs": {}, "resources": [], "check_results": null}
   */
  state?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - Pending: The task is ready.
   * - PlanQueued: The plan task is queued and waiting for an available workflow.
   * - ApplyQueued: The apply task is queued and waiting for an available workflow.
   * - Planning: The plan phase is being executed.
   * - Planned: The plan execution is completed.
   * - Confirmed: The execution is confirmed after the plan phase.
   * - PlannedAndFinished: No differences are found after the plan execution is completed, and the job enters the final state.
   * - Applying: The apply phase is being executed.
   * - Applied: The apply execution is completed.
   * - Discarded: The execution task is discarded and enters the final state.
   * - Errored: An error occurs during the execution, and the job enters the final state.
   * - Canceled: The execution is canceled and enters the final state.
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

