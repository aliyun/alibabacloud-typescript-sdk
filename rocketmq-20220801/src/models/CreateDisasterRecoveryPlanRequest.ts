// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDisasterRecoveryPlanRequestInstances } from "./CreateDisasterRecoveryPlanRequestInstances";


export class CreateDisasterRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic synchronization of consumption progress.
   * 
   * > This is effective only when consumption progress synchronization is enabled, i.e., the value of `syncCheckpointEnabled` is true.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * Instances involved in the backup plan. Required
   */
  instances?: CreateDisasterRecoveryPlanRequestInstances[];
  /**
   * @remarks
   * Plan description
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * Plan name, required
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * Backup plan type, required. Please refer to the [documentation](https://help.aliyun.com/document_detail/2843187.html).
   * Parameter values are as follows:
   *   - ACTIVE_PASSIVE: One-way backup
   *   - ACTIVE_ACTIVE: Two-way backup
   * 
   * @example
   * ACTIVE_ACTIVE
   */
  planType?: string;
  /**
   * @remarks
   * Switch for synchronizing consumption progress
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      instances: 'instances',
      planDesc: 'planDesc',
      planName: 'planName',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      instances: { 'type': 'array', 'itemType': CreateDisasterRecoveryPlanRequestInstances },
      planDesc: 'string',
      planName: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

