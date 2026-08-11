// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterNodepoolRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The upgrade interval between batches. This parameter takes effect only when the pause policy is set to `NotPause`.
   * 
   * Valid values: [5,120]. Unit: minutes.
   * 
   * This parameter can be set to 0, which indicates no interval between batches.
   * 
   * @example
   * 5
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes that are allowed to fail during the rolling update. Default value: 0, which indicates that the task fails if any node fails. If the value is greater than 0, the task fails and stops when the cumulative number of failed nodes exceeds this value.
   * 
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @remarks
   * The maximum number of nodes that can be updated in parallel per batch. Node pool updates are performed in batches.
   * 
   * Valid values: [1,10].
   * 
   * Default value: 10.
   * 
   * @example
   * 2
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The automatic pause policy during node upgrades. Valid values:
   * - FirstBatch: Pauses after the first batch is complete.
   * - EveryBatch: Pauses after each batch is complete.
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
   * The system image ID of the node.
   * 
   * @example
   * aliyun_3_x64_20G_container_optimized_20241226.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The Kubernetes version of the node. You can call [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) to obtain the current cluster version information from `KubernetesVersion`.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The list of nodes to upgrade. If not specified, all nodes in the node pool are upgraded by default.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: UpgradeClusterNodepoolRequestRollingPolicy;
  /**
   * @remarks
   * The runtime type. You can call [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) to obtain the runtime information from the runtime field.
   * 
   * @example
   * containerd
   */
  runtimeType?: string;
  /**
   * @remarks
   * The runtime version of the node. You can call [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) to obtain the runtime version information from the runtime field.
   * 
   * @example
   * 1.6.36
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * Specifies whether to use disk replacement for the upgrade. Valid values:
   * - true: Uses disk replacement to upgrade the node pool. ACK reinitializes the nodes based on the current node pool configurations, such as logon method, labels, taints, operating system image, and runtime version.
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

