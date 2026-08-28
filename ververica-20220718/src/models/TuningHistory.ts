// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TuningHistoryNewResourceSetting extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores per TaskManager.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The memory per TaskManager, in a format such as 4 Gi.
   * 
   * @example
   * 2 Gi
   */
  memory?: string;
  /**
   * @remarks
   * The parallelism.
   * 
   * @example
   * 4
   */
  parallelism?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
      parallelism: 'parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'string',
      parallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TuningHistoryOldResourceSetting extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores per TaskManager.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The memory per TaskManager, in a format such as 4 Gi.
   * 
   * @example
   * 2 Gi
   */
  memory?: string;
  /**
   * @remarks
   * The parallelism.
   * 
   * @example
   * 2
   */
  parallelism?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
      parallelism: 'parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'string',
      parallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TuningHistory extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * - SCALE_UP_PARALLELISM: scales up parallelism.
   * - SCALE_DOWN_PARALLELISM: scales down parallelism.
   * - SCALE_UP_MEMORY: scales up memory.
   * - RESTART: restarts the job.
   * 
   * @example
   * SCALE_UP_PARALLELISM
   */
  actionType?: string;
  /**
   * @remarks
   * The additional annotations.
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The full path name of the deployment.
   * 
   * @example
   * namespaces/ns-xxx/deployments/6aa0d4d1-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  deploymentName?: string;
  /**
   * @remarks
   * Indicates whether this is a hot update. A value of true indicates that the change takes effect without restarting the job. A value of false indicates that the job must be restarted.
   * 
   * @example
   * true
   */
  isHotUpdate?: boolean;
  /**
   * @remarks
   * The ID of the associated job.
   * 
   * @example
   * b462c053-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The resource configuration after tuning. This value may be null if the tuning failed.
   */
  newResourceSetting?: TuningHistoryNewResourceSetting;
  /**
   * @remarks
   * The resource configuration before tuning.
   */
  oldResourceSetting?: TuningHistoryOldResourceSetting;
  /**
   * @remarks
   * The trigger timestamp in milliseconds.
   * 
   * @example
   * 1718270936000
   */
  triggerTime?: number;
  /**
   * @remarks
   * The UUID of the tuning record.
   * 
   * @example
   * 06d81ae2-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  tuningId?: string;
  /**
   * @remarks
   * The tuning message. This is an internationalized, human-readable string that is not recommended for programmatic parsing.
   * 
   * @example
   * Scale up parallelism from 2 to 4
   */
  tuningMessage?: string;
  /**
   * @remarks
   * The tuning state. Valid values:
   * - SUCCESS: The tuning succeeded.
   * - FAILED: The tuning failed.
   * - EXECUTING: The tuning is in progress.
   * - TERMINATED: The tuning was terminated.
   * - FAILED_WITH_ROLLBACK_SUCCESS: The tuning failed but the rollback succeeded.
   * - FAILED_WITH_ROLLBACK_FAILED: The tuning failed and the rollback also failed.
   * - FAILED_WITH_RESOURCE_LACK: The tuning failed due to insufficient resources.
   * - FAILED_WITH_SAME_RESOURCE_SETTING: The tuning failed because the resource configuration did not change.
   * 
   * @example
   * SUCCESS
   */
  tuningState?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      annotations: 'annotations',
      deploymentName: 'deploymentName',
      isHotUpdate: 'isHotUpdate',
      jobId: 'jobId',
      newResourceSetting: 'newResourceSetting',
      oldResourceSetting: 'oldResourceSetting',
      triggerTime: 'triggerTime',
      tuningId: 'tuningId',
      tuningMessage: 'tuningMessage',
      tuningState: 'tuningState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      deploymentName: 'string',
      isHotUpdate: 'boolean',
      jobId: 'string',
      newResourceSetting: TuningHistoryNewResourceSetting,
      oldResourceSetting: TuningHistoryOldResourceSetting,
      triggerTime: 'number',
      tuningId: 'string',
      tuningMessage: 'string',
      tuningState: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.newResourceSetting && typeof (this.newResourceSetting as any).validate === 'function') {
      (this.newResourceSetting as any).validate();
    }
    if(this.oldResourceSetting && typeof (this.oldResourceSetting as any).validate === 'function') {
      (this.oldResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

