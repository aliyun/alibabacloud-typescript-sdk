// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoscalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The waiting time before the auto scaling feature performs a scale-in activity. It is an interval between the time when the scale-in threshold is reached and the time when the scale-in activity (reducing the number of pods) starts. Unit: minutes. Default value: 10.
   * 
   * @example
   * 10 m
   */
  coolDownDuration?: string;
  /**
   * @remarks
   * Specifies whether to evict pods created by DaemonSets when the cluster autoscaler performs a scale-in activity. Valid values:
   * 
   * *   `true`: evicts DaemonSet pods.
   * *   `false`: does not evict DaemonSet pods.
   * 
   * @example
   * false
   */
  daemonsetEvictionForNodes?: boolean;
  /**
   * @remarks
   * The node pool scale-out policy. Valid values:
   * 
   * *   `least-waste`: the default policy. If multiple node pools meet the requirement, this policy selects the node pool that will have the least idle resources after the scale-out activity is completed.
   * *   `random`: the random policy. If multiple node pools meet the requirement, this policy selects a random node pool for the scale-out activity.
   * *   `priority`: the priority-based policy If multiple node pools meet the requirement, this policy selects the node pool with the highest priority for the scale-out activity. The priority setting is stored in the ConfigMap named `cluster-autoscaler-priority-expander` in the kube-system namespace. When a scale-out activity is triggered, the policy obtains the node pool priorities from the ConfigMap based on the node pool IDs and then selects the node pool with the highest priority for the scale-out activity.
   * 
   * @example
   * least-waste
   */
  expander?: string;
  /**
   * @remarks
   * The scale-in threshold of GPU utilization. This threshold specifies the ratio of the GPU resources that are requested by pods to the total GPU resources on the node.
   * 
   * A scale-in activity is performed only when the CPU utilization, memory utilization, and GPU utilization of a GPU-accelerated node are lower than the scale-in threshold of GPU utilization.
   * 
   * @example
   * 0.5
   */
  gpuUtilizationThreshold?: string;
  /**
   * @remarks
   * The maximum amount of time to wait for pods on a node to terminate during a scale-in activity. Unit: seconds.
   * 
   * @example
   * 14400s
   */
  maxGracefulTerminationSec?: number;
  /**
   * @remarks
   * The minimum number of pods allowed in each ReplicaSet before a scale-in activity is performed.
   * 
   * @example
   * 0
   */
  minReplicaCount?: number;
  /**
   * @remarks
   * Auto-scaling priority configuration. After creating a node pool with elasticity enabled, you can choose whether to configure a priority strategy and priority settings through [Enabling Node Auto-scaling](https://help.aliyun.com/document_detail/119099.html). This allows you to set priorities for the specified auto-scaling node pool scaling group. The priority value range is [1, 100] and must be a positive integer.
   */
  priorities?: { [key: string]: string[] };
  /**
   * @remarks
   * Specifies whether to delete the corresponding Kubernetes node objects after nodes are removed in swift mode. For more information about the swift mode, see [Scaling mode](https://help.aliyun.com/document_detail/119099.html). Default value: false Valid values:
   * 
   * *   `true`: deletes the corresponding Kubernetes node objects after nodes are removed in swift mode. We recommend that you do not set the value to true because data inconsistency may occur in Kubernetes objects.
   * *   `false`: retains the corresponding Kubernetes node objects after nodes are removed in swift mode.
   * 
   * @example
   * false
   */
  recycleNodeDeletionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node scale-in activities. Valid values:
   * 
   * *   `true`: allows node scale-in activities.
   * *   `false`: does not allow node scale-in activities.
   * 
   * @example
   * true
   */
  scaleDownEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether the cluster autoscaler performs a scale-out activity when the number of ready nodes in the cluster is 0. Default value: true. Valid values:
   * 
   * *   `true`: performs a scale-out activity.
   * *   `false`: does not perform a scale-out activity.
   * 
   * @example
   * true
   */
  scaleUpFromZero?: boolean;
  /**
   * @remarks
   * Elastic component type, default is goatscaler for cluster version 1.24 and above, and cluster-autoscaler below that. Values:
   * 
   * - `goatscaler`: Instant elasticity. 
   * - `cluster-autoscaler`: Auto-scaling.
   * 
   * @example
   * goatscaler
   */
  scalerType?: string;
  /**
   * @remarks
   * The interval at which the system scans for events that trigger scaling activities. Unit: seconds. Default value: 60.
   * 
   * @example
   * 30s
   */
  scanInterval?: string;
  /**
   * @remarks
   * Specifies whether the cluster autoscaler scales in nodes that host pods mounted with local volumes, such as EmptyDir or HostPath volumes. Valid values:
   * 
   * *   `true`: does not allow the cluster autoscaler to scale in these nodes.
   * *   `false`: allows the cluster autoscaler to scale in these nodes.
   * 
   * @example
   * false
   */
  skipNodesWithLocalStorage?: boolean;
  /**
   * @remarks
   * Specifies whether the cluster autoscaler scales in nodes that host pods in the kube-system namespace. This parameter does not take effect on pods created by DaemonSets and mirror pods. Valid values:
   * 
   * *   `true`: does not allow the cluster autoscaler to scale in these nodes.
   * *   `false`: allows the cluster autoscaler to scale in these nodes.
   * 
   * @example
   * true
   */
  skipNodesWithSystemPods?: boolean;
  /**
   * @remarks
   * The cooldown period. After the autoscaler performs a scale-out activity, the autoscaler waits a cooldown period before it can perform a scale-in activity. Newly added nodes can be removed in scale-in activities only after the cooldown period ends. Unit: minutes.
   * 
   * @example
   * 10 m
   */
  unneededDuration?: string;
  /**
   * @remarks
   * The scale-in threshold. This threshold specifies the ratio of the resources that are requested by pods to the total resources on the node.
   * 
   * A scale-in activity is performed only when the CPU utilization and memory utilization of a node are lower than the scale-in threshold.
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

