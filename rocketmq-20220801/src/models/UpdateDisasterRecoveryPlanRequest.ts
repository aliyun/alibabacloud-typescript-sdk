// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDisasterRecoveryPlanRequestInstances } from "./UpdateDisasterRecoveryPlanRequestInstances";


export class UpdateDisasterRecoveryPlanRequest extends $dara.Model {
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
   * The instances that are involved in the global message backup plan.
   */
  instances?: UpdateDisasterRecoveryPlanRequestInstances[];
  /**
   * @remarks
   * The description of the global message backup plan.
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The name of the global message backup plan.
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * The type of the global message backup plan. Valid values:
   * 
   * *   ACTIVE_PASSIVE: geo-disaster recovery
   * *   ACTIVE_ACTIVE: active geo-redundancy
   * 
   * @example
   * ACTIVE_PASSIVE
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
      instances: { 'type': 'array', 'itemType': UpdateDisasterRecoveryPlanRequestInstances },
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

