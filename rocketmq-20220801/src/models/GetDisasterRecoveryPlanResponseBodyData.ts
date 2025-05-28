// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDisasterRecoveryPlanResponseBodyDataInstances } from "./GetDisasterRecoveryPlanResponseBodyDataInstances";


export class GetDisasterRecoveryPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic synchronization of consumption progress.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * The time when the backup plan was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Additional Information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * Instances involved in the backup plan
   */
  instances?: GetDisasterRecoveryPlanResponseBodyDataInstances[];
  /**
   * @remarks
   * The describe of the global message backup plan.
   * 
   * @example
   * xxxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The ID of the global message backup plan.
   * 
   * @example
   * 1300000016
   */
  planId?: number;
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
   * The status of the global message backup plan.
   * 
   * @example
   * RUNNING
   */
  planStatus?: string;
  /**
   * @remarks
   * The type of the global message backup plan.
   * values are as follows:
   *   - ACTIVE_PASSIVE: One-way backup
   *   - ACTIVE_ACTIVE: Two-way backup
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
  /**
   * @remarks
   * The time when the backup plan was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      createTime: 'createTime',
      extInfo: 'extInfo',
      instances: 'instances',
      planDesc: 'planDesc',
      planId: 'planId',
      planName: 'planName',
      planStatus: 'planStatus',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instances: { 'type': 'array', 'itemType': GetDisasterRecoveryPlanResponseBodyDataInstances },
      planDesc: 'string',
      planId: 'number',
      planName: 'string',
      planStatus: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

