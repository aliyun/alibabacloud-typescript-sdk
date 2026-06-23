// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterNodepoolRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The interval between batches during the upgrade. This parameter takes effect only when the pause policy is set to `NotPause`.
   * 
   * Valid values: [5,120]. Unit: minutes.
   * 
   * You can set this parameter to 0 to specify no interval between batches.
   * 
   * @example
   * 5
   */
  batchInterval?: number;
  /**
   * @remarks
   * The maximum number of nodes that can be upgraded in parallel per batch. Nodes in the node pool are upgraded in batches.
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
   * - FirstBatch: pauses after the first batch is completed.
   * - EveryBatch: pauses after each batch is completed.
   * - NotPause: does not pause.
   * 
   * @example
   * NotPause
   */
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batch_interval',
      maxParallelism: 'max_parallelism',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
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
   * The system image ID of the node.
   * 
   * @example
   * aliyun_3_x64_20G_container_optimized_20241226.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The Kubernetes version of the node. You can call [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) to obtain the current cluster version information from the `KubernetesVersion` field.
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The list of nodes to upgrade. If this parameter is not specified, all nodes in the node pool are upgraded.
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
   * Specifies whether to use system cloud disk replacement for the upgrade. Valid values:
   * - true: Uses system cloud disk replacement to upgrade the node pool. ACK reinitializes the nodes based on the current node pool configurations, such as the logon method, labels, taints, operating system image, and runtime version.
   * - false: Does not use system cloud disk replacement.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  useReplace?: boolean;
  static names(): { [key: string]: string } {
    return {
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

