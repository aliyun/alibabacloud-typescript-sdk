// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoscalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The scale-down trigger delay. The time interval between detecting a scale-down need (reaching the scale-down threshold) and actually performing the scale-down operation (reducing the number of Pods).
   * 
   * Valid values: [1,60]. Unit: minutes.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  coolDownDuration?: string;
  /**
   * @remarks
   * Specifies whether cluster-autoscaler evicts DaemonSet Pods on nodes during scale-down. Valid values:
   * - `true`: DaemonSet Pods are evicted.
   * - `false`: DaemonSet Pods are not evicted.
   * 
   * @example
   * false
   */
  daemonsetEvictionForNodes?: boolean;
  /**
   * @remarks
   * The node pool scale-out order policy. Valid values:
   * - `least-waste`: The default policy. If multiple node pools are available for scale-out, the node pool with the least resource waste is selected.
   * - `random`: The random policy. If multiple node pools are available for scale-out, a random node pool is selected.
   * - `priority`: The priority policy. If multiple node pools are available for scale-out, the node pool with the highest priority is selected based on the custom scaling group order you defined. Node pool priorities are defined by the `priorities` parameter.
   * 
   * @example
   * least-waste
   */
  expander?: string;
  /**
   * @remarks
   * The GPU scale-down threshold. The ratio of requested resources to total resources on a node.
   * 
   * A GPU node can be scaled down only when this ratio falls below the configured threshold, meaning the CPU, memory, and GPU utilization of the node are all below the GPU scale-down threshold.
   * 
   * Valid values: [0.1~1].
   * 
   * Default value: 0.3, which indicates 30%.
   * 
   * @example
   * 0.3
   */
  gpuUtilizationThreshold?: string;
  /**
   * @remarks
   * The timeout period that cluster-autoscaler waits for Pod termination during node draining in scale-down scenarios.
   * 
   * Unit: seconds.
   * 
   * Default value: 14400.
   * 
   * @example
   * 14400
   */
  maxGracefulTerminationSec?: number;
  /**
   * @remarks
   * The minimum number of Pods allowed in each ReplicaSet before a node can be scaled down.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  minReplicaCount?: number;
  /**
   * @remarks
   * The priority configuration for automatic scaling. After you create a node pool with auto scaling enabled, you can choose whether to configure a priority policy and priority settings by using [Enable node auto scaling](https://help.aliyun.com/document_detail/119099.html) to assign priorities to the scaling groups of specified auto scaling node pools.
   * 
   * Valid values: [1, 100]. The value must be a positive integer. A larger value indicates a higher priority.
   */
  priorities?: { [key: string]: string[] };
  /**
   * @remarks
   * Specifies whether to delete the corresponding Kubernetes Node object after a node is successfully scaled down in swift mode. For more information about swift mode, see [Scaling modes](https://help.aliyun.com/document_detail/119099.html). Default value: false. Valid values:
   * 
   * - `true`: The Kubernetes Node object is deleted after the node is stopped in swift mode. Setting this parameter to true is not recommended because it may cause Kubernetes object data inconsistency.
   * - `false`: The Kubernetes Node object is retained after the node is stopped in swift mode.
   * 
   * @example
   * false
   */
  recycleNodeDeletionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node scale-down. Valid values:
   * - `true`: Scale-down is allowed.
   * - `false`: Scale-down is not allowed.
   * 
   * @example
   * true
   */
  scaleDownEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether cluster-autoscaler performs scale-out when the number of Ready nodes in the cluster is 0. Default value: true. Valid values:
   * 
   * - `true`: Scale-out is performed.
   * - `false`: Scale-out is not performed.
   * 
   * @example
   * true
   */
  scaleUpFromZero?: boolean;
  /**
   * @remarks
   * The type of the auto scaling component. For clusters of version 1.24 and later, the default value is goatscaler. For earlier versions, the default value is cluster-autoscaler. Valid values:
   * 
   * - `goatscaler`: instant scaling.
   * 
   * - `cluster-autoscaler`: automatic scaling.
   * 
   * @example
   * goatscaler
   */
  scalerType?: string;
  /**
   * @remarks
   * The scaling sensitivity, which adjusts the interval at which the system evaluates scaling decisions.
   * 
   * Valid values: 15, 30, 60, 120, 180, and 300. Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 30
   */
  scanInterval?: string;
  /**
   * @remarks
   * Specifies whether cluster-autoscaler skips scaling down nodes that run Pods with local storage (such as EmptyDir or HostPath). Valid values:
   * - `true`: Nodes are not scaled down.
   * - `false`: Nodes are scaled down.
   * 
   * @example
   * false
   */
  skipNodesWithLocalStorage?: boolean;
  /**
   * @remarks
   * Specifies whether cluster-autoscaler skips scaling down nodes that run Pods in the kube-system namespace. This feature does not apply to DaemonSet Pods or Mirror Pods. Valid values:
   * - `true`: Nodes are not scaled down.
   * - `false`: Nodes are scaled down.
   * 
   * @example
   * true
   */
  skipNodesWithSystemPods?: boolean;
  /**
   * @remarks
   * The cool-down period. The time interval after the most recent scale-out during which the auto scaling component does not perform scale-down operations. Nodes added during scale-out can only be evaluated for scale-down after the cool-down period expires.
   * 
   * Valid values: [1,60]. Unit: minutes.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  unneededDuration?: string;
  /**
   * @remarks
   * The scale-down threshold. The ratio of requested resources to total resources on a node.
   * 
   * A node can be scaled down only when this ratio falls below the configured threshold, meaning both the CPU and memory resources utilization of the node are below the scale-down threshold.
   * 
   * Valid values: [0.1~1].
   * 
   * Default value: 0.5, which indicates 50%.
   * 
   * @example
   * 0.5
   */
  utilizationThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      coolDownDuration: 'cool_down_duration',
      daemonsetEvictionForNodes: 'daemonset_eviction_for_nodes',
      expander: 'expander',
      gpuUtilizationThreshold: 'gpu_utilization_threshold',
      maxGracefulTerminationSec: 'max_graceful_termination_sec',
      minReplicaCount: 'min_replica_count',
      priorities: 'priorities',
      recycleNodeDeletionEnabled: 'recycle_node_deletion_enabled',
      scaleDownEnabled: 'scale_down_enabled',
      scaleUpFromZero: 'scale_up_from_zero',
      scalerType: 'scaler_type',
      scanInterval: 'scan_interval',
      skipNodesWithLocalStorage: 'skip_nodes_with_local_storage',
      skipNodesWithSystemPods: 'skip_nodes_with_system_pods',
      unneededDuration: 'unneeded_duration',
      utilizationThreshold: 'utilization_threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownDuration: 'string',
      daemonsetEvictionForNodes: 'boolean',
      expander: 'string',
      gpuUtilizationThreshold: 'string',
      maxGracefulTerminationSec: 'number',
      minReplicaCount: 'number',
      priorities: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      recycleNodeDeletionEnabled: 'boolean',
      scaleDownEnabled: 'boolean',
      scaleUpFromZero: 'boolean',
      scalerType: 'string',
      scanInterval: 'string',
      skipNodesWithLocalStorage: 'boolean',
      skipNodesWithSystemPods: 'boolean',
      unneededDuration: 'string',
      utilizationThreshold: 'string',
    };
  }

  validate() {
    if(this.priorities) {
      $dara.Model.validateMap(this.priorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

