// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDisasterRecoveryPlansResponseBodyDataListInstances } from "./ListDisasterRecoveryPlansResponseBodyDataListInstances";


export class ListDisasterRecoveryPlansResponseBodyDataList extends $dara.Model {
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
   * Creation time
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Extended information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * Instances involved in the backup plan
   */
  instances?: ListDisasterRecoveryPlansResponseBodyDataListInstances[];
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
   * Plan ID
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Plan name
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * Plan status:
   *   - CREATED (Created)
   *   - RUNNING (Running)
   *   - DELETED (Deleted)
   * 
   * @example
   * RUNNING
   */
  planStatus?: string;
  /**
   * @remarks
   * Plan type:
   *   - ACTIVE_PASSIVE (One-way backup)
   *   - ACTIVE_ACTIVE (Two-way backup)
   * 
   * @example
   * ACTIVE_PASSIVE
   */
  planType?: string;
  /**
   * @remarks
   * Sync checkpoint switch
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  /**
   * @remarks
   * Update time
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
      instances: { 'type': 'array', 'itemType': ListDisasterRecoveryPlansResponseBodyDataListInstances },
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

