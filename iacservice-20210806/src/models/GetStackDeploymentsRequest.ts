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
   * The deployment name.
   * 
   * @example
   * production
   */
  deploymentName?: string;
  /**
   * @remarks
   * The deployment number. The deployment number of each stack starts from 1 and increments each time a deployment is triggered.
   * 
   * @example
   * 1
   */
  deploymentNo?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The deployment status.
   * | Name | Description |
   * |------|------|
   * | Pending | The initial status after a deployment is created. |
   * | PriorityQueued | The deployment is queued by priority. |
   * | PlanQueued | The deployment is queued because no workflow is available after the deployment is created. |
   * | ApplyQueued | The deployment is queued because no workflow is available during execution. |
   * | Planning | The resource deployment is in the Plan phase. |
   * | Planned | The resource deployment has completed the Plan phase. |
   * | ConfigProactiveInProgress | A compliance pre-check is in progress. |
   * | ConfigProactiveSuccess | The compliance pre-check succeeded. |
   * | DetectInProgress | Drift detection is in progress. |
   * | ImportQueued | The deployment is queued because no workflow is available during the Import phase. |
   * | Importing | The resource deployment is in the Import phase. |
   * | Imported | The resource deployment has completed the Import phase. |
   * | StateQueued | The deployment is queued because no workflow is available during the state command execution. |
   * | Stating | The resource deployment is executing the state command. |
   * | Stated | The resource deployment has completed the state command execution. |
   * | Confirmed | The resource deployment has been confirmed after the Plan phase. |
   * | PlannedAndFinished | No differences were found after the Plan phase. The deployment is in a final status. |
   * | Applying | The resource deployment is in the Apply phase. |
   * | Applied | The resource deployment has completed the Apply phase. |
   * | Discarded | The resource deployment has been discarded and is in a final status. |
   * | Errored | The deployment encountered an error and is in a final status. |
   * | ConfigProactiveFailure | The compliance pre-check failed. |
   * | Canceled | The deployment has been canceled and is in a final status. |.
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

