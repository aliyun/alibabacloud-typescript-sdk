// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OfflineExperimentConfig } from "./OfflineExperimentConfig";


export class CreateExperimentRunRequest extends $dara.Model {
  /**
   * @remarks
   * The completion time, in millisecond-level UNIX timestamp.
   * 
   * @example
   * 1784721811392
   */
  completedAt?: number;
  /**
   * @remarks
   * The number of completed tasks. If not specified, the default value is 0.
   * 
   * @example
   * 0
   */
  completedTasks?: number;
  /**
   * @remarks
   * The execution time, in millisecond-level UNIX timestamp.
   * 
   * @example
   * 1784721775379
   */
  executedAt?: number;
  /**
   * @remarks
   * The experiment plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-plan-0242d983f5d340fd8479cf2c19eb279e
   */
  experimentPlanId?: string;
  /**
   * @remarks
   * The number of failed tasks. If not specified, the default value is 0.
   * 
   * @example
   * 0
   */
  failedTasks?: number;
  /**
   * @remarks
   * The list of offline experiment configurations. Required when the plan type is offline. The number of items ranges from 1 to 5.
   * 
   * @example
   * [{"label": "experimentA", "name": "experimentA"}]
   */
  offlineExperiments?: OfflineExperimentConfig[];
  /**
   * @remarks
   * The experiment record name. If not specified, the default value is the plan name plus a timestamp.
   * 
   * @example
   * arms_agent_experiment 2026/07/22 20:02:55
   */
  recordName?: string;
  /**
   * @remarks
   * The initial status. If not specified, the default value is `pending`.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The total number of tasks. For online experiments, if not specified, the value is calculated based on the number of generated tasks.
   * 
   * @example
   * 40
   */
  totalTasks?: number;
  /**
   * @remarks
   * Optional.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      completedTasks: 'completedTasks',
      executedAt: 'executedAt',
      experimentPlanId: 'experimentPlanId',
      failedTasks: 'failedTasks',
      offlineExperiments: 'offlineExperiments',
      recordName: 'recordName',
      status: 'status',
      totalTasks: 'totalTasks',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'number',
      completedTasks: 'number',
      executedAt: 'number',
      experimentPlanId: 'string',
      failedTasks: 'number',
      offlineExperiments: { 'type': 'array', 'itemType': OfflineExperimentConfig },
      recordName: 'string',
      status: 'string',
      totalTasks: 'number',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.offlineExperiments)) {
      $dara.Model.validateArray(this.offlineExperiments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

