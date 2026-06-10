// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoscalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cool-down duration for scale-in events. This is the time interval from when the system detects a node is eligible for a scale-in to when the scale-in operation is executed.
   * 
   * Valid values: 1 to 60. Unit: minutes.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  coolDownDuration?: string;
  /**
   * @remarks
   * Specifies whether `cluster-autoscaler` evicts DaemonSet Pods from nodes during a scale-in event. Valid values:
   * 
   * - `true`: Perform eviction.
   * 
   * - `false`: Do not perform eviction.
   * 
   * @example
   * false
   */
  daemonsetEvictionForNodes?: boolean;
  /**
   * @remarks
   * The strategy for selecting a node pool for a scale-out when multiple node pools are available. Valid values:
   * 
   * - `least-waste`: The default strategy. The scaler selects the node pool that will have the least idle resources after a scale-out.
   * 
   * - `random`: The scaler selects a random node pool from the list of eligible node pools.
   * 
   * - `priority`: The scaler selects the node pool that has the highest priority. You must configure the priority of each scaling group by using the `priorities` parameter.
   * 
   * @example
   * least-waste
   */
  expander?: string;
  /**
   * @remarks
   * The GPU utilization threshold for a scale-in on GPU nodes, which is the ratio of requested resources to total allocatable resources on a node.
   * 
   * A GPU node is eligible for a scale-in only if its CPU, memory, and GPU utilization all fall below this threshold.
   * 
   * Valid values: [0.1, 1].
   * 
   * Default value: 0.3 (30%).
   * 
   * @example
   * 0.3
   */
  gpuUtilizationThreshold?: string;
  /**
   * @remarks
   * The maximum duration in seconds that `cluster-autoscaler` waits for Pods to terminate during a node drain for a scale-in event.
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
   * The minimum number of Pods that must remain for any ReplicaSet after a scale-in operation. Nodes will not be scaled-in if doing so would violate this minimum.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  minReplicaCount?: number;
  /**
   * @remarks
   * Configures the priorities for scaling groups. This is used when the `expander` strategy is set to `priority`. After you create a node pool and enable autoscaling for it, you can configure the priority of its associated scaling group. For more information, see [Enable node autoscaling](https://help.aliyun.com/document_detail/119099.html).
   * 
   * The priority must be a positive integer from 1 to 100. A larger value indicates a higher priority.
   */
  priorities?: { [key: string]: string[] };
  /**
   * @remarks
   * Specifies whether to delete the Kubernetes Node object after a node is successfully scaled-in using fast scaling mode. For more information, see [Scaling modes](https://help.aliyun.com/document_detail/119099.html). Default value: false. Valid values:
   * 
   * - `true`: The Node object is deleted after the instance is stopped. We do not recommend this setting because it can cause data inconsistencies in Kubernetes.
   * 
   * - `false`: The Node object is retained after the instance is stopped.
   * 
   * @example
   * false
   */
  recycleNodeDeletionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node scale-in operations. Valid values:
   * 
   * - `true`: Allows scale-in operations.
   * 
   * - `false`: Disables scale-in operations.
   * 
   * @example
   * true
   */
  scaleDownEnabled?: boolean;
  /**
   * @remarks
   * Controls whether `cluster-autoscaler` performs a scale-out operation when there are no ready nodes in the cluster. Default value: true. Valid values:
   * 
   * - `true`: A scale-out operation is performed.
   * 
   * - `false`: No scale-out operation is performed.
   * 
   * @example
   * true
   */
  scaleUpFromZero?: boolean;
  /**
   * @remarks
   * The type of scaler to use. In clusters that run Kubernetes 1.24 or later, the default is goatscaler. In clusters that run an earlier version, the default is cluster-autoscaler. Valid values:
   * 
   * - `goatscaler`: The proprietary scaler for fast scaling.
   * 
   * - `cluster-autoscaler`: The standard Kubernetes cluster autoscaler.
   * 
   * @example
   * goatscaler
   */
  scalerType?: string;
  /**
   * @remarks
   * The frequency at which the system checks for scaling conditions.
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
   * Controls whether `cluster-autoscaler` can scale-in nodes that run Pods using local storage (for example, with `emptyDir` or `hostPath` volumes). Valid values:
   * 
   * - `true`: Prevents these nodes from being scaled-in.
   * 
   * - `false`: Allows these nodes to be scaled-in.
   * 
   * @example
   * false
   */
  skipNodesWithLocalStorage?: boolean;
  /**
   * @remarks
   * Controls whether `cluster-autoscaler` can scale-in nodes that run Pods from the `kube-system` namespace. This setting does not affect DaemonSet or mirror Pods. Valid values:
   * 
   * - `true`: Prevents these nodes from being scaled-in.
   * 
   * - `false`: Allows these nodes to be scaled-in.
   * 
   * @example
   * true
   */
  skipNodesWithSystemPods?: boolean;
  /**
   * @remarks
   * The stabilization window. This is the period after a scale-out event during which the scaler does not perform scale-in operations.
   * 
   * Valid values: 1 to 60. Unit: minutes.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  unneededDuration?: string;
  /**
   * @remarks
   * The utilization threshold for a scale-in, which is the ratio of requested resources to the total allocatable resources on a node.
   * 
   * A node is eligible for a scale-in only when both its CPU and memory utilization fall below this threshold.
   * 
   * Valid values: [0.1, 1].
   * 
   * Default value: 0.5 (50%).
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

