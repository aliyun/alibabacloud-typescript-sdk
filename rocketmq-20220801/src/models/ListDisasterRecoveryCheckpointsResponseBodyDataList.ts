// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress } from "./ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress";
import { ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress } from "./ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress";


export class ListDisasterRecoveryCheckpointsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Consumption Progress ID
   * 
   * @example
   * 10000000xx
   */
  checkpointId?: number;
  /**
   * @remarks
   * Backup Mapping ID
   * 
   * @example
   * 10000000xx
   */
  itemId?: number;
  /**
   * @remarks
   * Last synchronization time
   * 
   * @example
   * 1740724080343
   */
  lastSyncTime?: number;
  /**
   * @remarks
   * Backup Plan ID
   * 
   * @example
   * 13000000xx
   */
  planId?: number;
  /**
   * @remarks
   * Source consumption progress
   */
  sourceProgress?: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress;
  /**
   * @remarks
   * Target consumption progress
   */
  targetProgress?: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress;
  static names(): { [key: string]: string } {
    return {
      checkpointId: 'checkpointId',
      itemId: 'itemId',
      lastSyncTime: 'lastSyncTime',
      planId: 'planId',
      sourceProgress: 'sourceProgress',
      targetProgress: 'targetProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpointId: 'number',
      itemId: 'number',
      lastSyncTime: 'number',
      planId: 'number',
      sourceProgress: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress,
      targetProgress: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress,
    };
  }

  validate() {
    if(this.sourceProgress && typeof (this.sourceProgress as any).validate === 'function') {
      (this.sourceProgress as any).validate();
    }
    if(this.targetProgress && typeof (this.targetProgress as any).validate === 'function') {
      (this.targetProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

