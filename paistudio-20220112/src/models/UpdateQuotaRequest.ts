// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { QuotaConfig } from "./QuotaConfig";


export class UpdateQuotaRequestClusterSpec extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Currently, only RayCluster is supported.
   * 
   * @example
   * RayCluster
   */
  clusterType?: string;
  /**
   * @remarks
   * The list of data sources mounted to the cluster. This parameter uses the overall replacement semantics: if it is not passed, the current state is maintained; if an empty array is passed, the list is cleared. Each element is a JSON object string that contains DataSourceId or Uri (one of them is required and they are mutually exclusive) and an optional MountPath.
   */
  dataSources?: string[];
  /**
   * @remarks
   * The container image used by the Ray cluster. If this parameter is explicitly passed, the system switches to this image. If it is left empty and the data sources remain unchanged, and GetQuota returns UpgradeAvailable=true, this update is considered an upgrade to the platform default image. To keep the current image, explicitly pass the current value.
   * 
   * @example
   * dsw-registry-vpc.ap-southeast-1.cr.aliyuncs.com/pai-common/ray-runtime
   */
  image?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      dataSources: 'DataSources',
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      dataSources: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaRequestGracefulUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The timeout limit for Ray draining of a single node. After the timeout, the node is still directly scaled down, which does not cause the upgrade to fail.
   * 
   * @example
   * 3600
   */
  drainTimeoutSeconds?: number;
  /**
   * @remarks
   * The migration window width, which is the maximum number of workers in the old cluster that are simultaneously in an unavailable state (draining or drained and pending removal), that is, the number of nodes migrated in parallel.
   * 
   * @example
   * 25%
   */
  maxUnavailable?: string;
  /**
   * @remarks
   * The number of workers in the old cluster that are kept in a schedulable state while waiting for the remaining Ray tasks in the old cluster to complete.
   * 
   * @example
   * 5
   */
  taskDrainReserveWorkers?: number;
  static names(): { [key: string]: string } {
    return {
      drainTimeoutSeconds: 'DrainTimeoutSeconds',
      maxUnavailable: 'MaxUnavailable',
      taskDrainReserveWorkers: 'TaskDrainReserveWorkers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainTimeoutSeconds: 'number',
      maxUnavailable: 'string',
      taskDrainReserveWorkers: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the compute cluster bound to the quota (RNQ Ray cluster). This parameter is only available for RNQ quotas and will be rejected for common quotas. It can only be modified when no operations are in progress on the quota. Unpassed sub-fields retain the current effective configurations.
   */
  clusterSpec?: UpdateQuotaRequestClusterSpec;
  /**
   * @remarks
   * The description of the resource quota.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to execute the current ClusterSpec change as a rolling upgrade (draining and migrating nodes one by one to the new cluster) instead of the default stop-and-rebuild method.
   * 
   * @example
   * true
   */
  enableGracefulUpgrade?: boolean;
  /**
   * @remarks
   * The tuning parameters for the migration process. This parameter is only allowed when EnableGracefulUpgrade is set to true.
   */
  gracefulUpgradeConfig?: UpdateQuotaRequestGracefulUpgradeConfig;
  /**
   * @remarks
   * The list of user-defined labels.
   * This is a full update.
   */
  labels?: Label[];
  /**
   * @remarks
   * Specifies whether to pass the default GPU driver configuration to child quotas.
   */
  propagateDefaultGPUDriver?: boolean;
  /**
   * @remarks
   * The queuing strategy for tasks on the quota.
   * 
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @remarks
   * The resource quota configuration.
   * 
   * **if can be null:**
   * true
   */
  quotaConfig?: QuotaConfig;
  /**
   * @remarks
   * The name of the resource quota.
   * 
   * @example
   * test
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSpec: 'ClusterSpec',
      description: 'Description',
      enableGracefulUpgrade: 'EnableGracefulUpgrade',
      gracefulUpgradeConfig: 'GracefulUpgradeConfig',
      labels: 'Labels',
      propagateDefaultGPUDriver: 'PropagateDefaultGPUDriver',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpec: UpdateQuotaRequestClusterSpec,
      description: 'string',
      enableGracefulUpgrade: 'boolean',
      gracefulUpgradeConfig: UpdateQuotaRequestGracefulUpgradeConfig,
      labels: { 'type': 'array', 'itemType': Label },
      propagateDefaultGPUDriver: 'boolean',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
    };
  }

  validate() {
    if(this.clusterSpec && typeof (this.clusterSpec as any).validate === 'function') {
      (this.clusterSpec as any).validate();
    }
    if(this.gracefulUpgradeConfig && typeof (this.gracefulUpgradeConfig as any).validate === 'function') {
      (this.gracefulUpgradeConfig as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

