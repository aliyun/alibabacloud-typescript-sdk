// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterNodepoolRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The upgrade interval between batches. This parameter takes effect only when the pause policy is set to `NotPause`.
   * 
   * Valid values: 5 to 120. Unit: minutes.
   * 
   * You can set this parameter to 0, which indicates that no interval is configured.
   * 
   * @example
   * 5
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes allowed to fail during the rolling update. Default value: 0, which indicates that the task fails if any node fails. If the value is greater than 0, the task fails and stops when the cumulative number of failed nodes exceeds this value.
   * 
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @remarks
   * The node updates in the node pool are performed in batches. This parameter specifies the maximum number of nodes that can be updated in parallel in each batch.
   * 
   * Valid values: 1 to 10.
   * 
   * Default value: 10.
   * 
   * @example
   * 2
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The automatic pause policy during the node upgrade process. Valid values:
   * - FirstBatch: Pauses after the first batch is completed.
   * - EveryBatch: Pauses after each batch is completed.
   * - NotPause: Does not pause.
   * 
   * @example
   * NotPause
   */
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batch_interval',
      maxFailedNodes: 'max_failed_nodes',
      maxParallelism: 'max_parallelism',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      maxFailedNodes: 'number',
      maxParallelism: 'number',
      pausePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterNodepoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore warning-level pre-checks.
   */
  ignoreWarningCheck?: boolean;
  /**
   * @remarks
   * The node system image ID.
   * 
   * @example
   * aliyun_3_x64_20G_container_optimized_20241226.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The node Kubernetes version. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation to obtain the current cluster version information from the `KubernetesVersion` field.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The list of specified nodes to upgrade. If not specified, all nodes in the node pool are upgraded by default.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: UpgradeClusterNodepoolRequestRollingPolicy;
  /**
   * @remarks
   * The runtime type. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation to obtain the runtime information from the runtime field.
   * 
   * @example
   * containerd
   */
  runtimeType?: string;
  /**
   * @remarks
   * The node runtime version. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation to obtain the runtime version information from the runtime field.
   * 
   * @example
   * 1.6.36
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * Specifies whether to use disk replacement for the upgrade. Valid values:
   * - true: Uses disk replacement. The node pool is upgraded by replacing the system cloud disks of the nodes. ACK reinitializes the nodes based on the current configurations of the node pool, such as the node logon method, labels, taints, operating system image, and runtime version.
   * - false: Does not use disk replacement.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  useReplace?: boolean;
  static names(): { [key: string]: string } {
    return {
      ignoreWarningCheck: 'ignore_warning_check',
      imageId: 'image_id',
      kubernetesVersion: 'kubernetes_version',
      nodeNames: 'node_names',
      rollingPolicy: 'rolling_policy',
      runtimeType: 'runtime_type',
      runtimeVersion: 'runtime_version',
      useReplace: 'use_replace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreWarningCheck: 'boolean',
      imageId: 'string',
      kubernetesVersion: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: UpgradeClusterNodepoolRequestRollingPolicy,
      runtimeType: 'string',
      runtimeVersion: 'string',
      useReplace: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(this.rollingPolicy && typeof (this.rollingPolicy as any).validate === 'function') {
      (this.rollingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

