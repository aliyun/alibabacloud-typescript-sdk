// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDeploymentsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration version, such as v1. The initial value is v1. The version number increments each time the stack is updated or refreshed and the configuration changes.
   * 
   * @example
   * v1
   */
  configVersion?: string;
  /**
   * @remarks
   * The name of the deployment.
   * 
   * @example
   * production
   */
  deploymentName?: string;
  /**
   * @remarks
   * The deployment number. The deployment number of each stack starts from 1 and increments each time a deployment is successfully triggered.
   * 
   * @example
   * 1
   */
  deploymentNo?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The deployment status. Valid values:
   * | Name | Description |
   * |------|------|
   * | Pending | The initial status after the deployment is created. |
   * | PriorityQueued | The deployment is queued with priority. |
   * | PlanQueued | The deployment is queued and waiting for an available workflow after it is created. |
   * | ApplyQueued | The deployment is queued and waiting for an available workflow during execution. |
   * | Planning | The deployment is in the plan phase. |
   * | Planned | The deployment has completed the plan phase. |
   * | ConfigProactiveInProgress | The compliance precheck is in progress. |
   * | ConfigProactiveSuccess | The compliance precheck is successful. |
   * | DetectInProgress | Drift detection is in progress. |
   * | ImportQueued | The deployment is queued and waiting for an available workflow during the import phase. |
   * | Importing | The deployment is in the import phase. |
   * | Imported | The deployment has completed the import phase. |
   * | StateQueued | The deployment is queued and waiting for an available workflow during the state command execution. |
   * | Stating | The deployment is executing the state command. |
   * | Stated | The deployment has completed the execution of the state command. |
   * | Confirmed | The deployment is confirmed after the plan phase. |
   * | PlannedAndFinished | The deployment is in the final state because no differences are found after the plan phase. |
   * | Applying | The deployment is in the apply phase. |
   * | Applied | The deployment has completed the apply phase. |
   * | Discarded | The deployment is discarded and enters the final state. |
   * | Errored | An error occurred during the deployment execution, and the deployment enters the final state. |
   * | ConfigProactiveFailure | The compliance precheck failed. |
   * | Canceled | The deployment execution is canceled, and the deployment enters the final state. |
   * 
   * @example
   * Applied
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configVersion: 'configVersion',
      deploymentName: 'deploymentName',
      deploymentNo: 'deploymentNo',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configVersion: 'string',
      deploymentName: 'string',
      deploymentNo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

