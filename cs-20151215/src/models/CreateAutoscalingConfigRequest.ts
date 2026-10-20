// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoscalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The scale-in trigger delay, which is the time interval between when a scale-in need is detected (the scale-in threshold is reached) and when the scale-in operation (reducing the number of Pods) is actually performed.
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
   * Specifies whether cluster-autoscaler evicts DaemonSet Pods on a node during scale-in. Valid values:
   * - `true`: Eviction is performed.
   * - `false`: Eviction is not performed.
   * 
   * @example
   * false
   */
  daemonsetEvictionForNodes?: boolean;
  /**
   * @remarks
   * The node pool scale-out order policy. Valid values:
   * - `least-waste`: The default policy. If multiple node pools are available for scale-out, the node pool with the least resource waste is selected.
   * - `random`: The random policy. If multiple node pools are available for scale-out, a node pool is randomly selected.
   * - `priority`: The priority policy. If multiple node pools are available for scale-out, the node pool with the highest priority based on your custom scaling group order is selected. Node pool priorities are defined by the `priorities` parameter.
   * 
   * @example
   * least-waste
   */
  expander?: string;
  /**
   * @remarks
   * The GPU scale-in threshold, which is the ratio of requested resources to total resources on a node.
   * 
   * A GPU node can be scaled in only when this ratio falls below the configured threshold, meaning the CPU, memory, and GPU resource utilization of the node are all below the GPU scale-in threshold.
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
   * The timeout period for cluster-autoscaler to wait for Pod termination during node draining in a scale-in scenario.
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
   * The minimum number of Pods allowed in each ReplicaSet before a node can be scaled in.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  minReplicaCount?: number;
  /**
   * @remarks
   * The priority configuration for auto scaling. After you create a node pool with elastic scaling enabled, you can configure priority policies and priority settings for the scaling groups of specified auto scaling node pools by using [Enable node auto scaling](https://help.aliyun.com/document_detail/119099.html).
   * 
   * Valid values: [1, 100]. The value must be a positive integer. A larger value indicates a higher priority.
   */
  priorities?: { [key: string]: string[] };
  /**
   * @remarks
   * Specifies whether to delete the corresponding Kubernetes Node object after a node in rapid mode is successfully scaled in. For more information about rapid mode, see [Scaling modes](https://help.aliyun.com/document_detail/119099.html). Default value: false. Valid values:
   * 
   * - `true`: The Kubernetes Node object is deleted after the node in rapid mode is stopped. Setting this parameter to true is not recommended because it may cause data inconsistency in Kubernetes objects.
   * - `false`: The Kubernetes Node object is retained after the node in rapid mode is stopped.
   * 
   * @example
   * false
   */
  recycleNodeDeletionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node scale-in. Valid values:
   * - `true`: Scale-in is allowed.
   * - `false`: Scale-in is prohibited.
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
   * The elastic component type. For clusters running version 1.24 or later, the default value is goatscaler. For earlier versions, the default value is cluster-autoscaler. Valid values:
   * 
   * - `goatscaler`: Instant scaling.
   * 
   * - `cluster-autoscaler`: Auto scaling.
   * 
   * @example
   * goatscaler
   */
  scalerType?: string;
  /**
   * @remarks
   * The scaling sensitivity, which adjusts the interval for the system to evaluate scaling decisions.
   * 
   * Valid values: 15, 30, 60, 120, 180, 300. Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 30
   */
  scanInterval?: string;
  /**
   * @remarks
   * Specifies whether cluster-autoscaler skips scale-in for nodes that run Pods with local storage (such as EmptyDir or HostPath). Valid values:
   * - `true`: Scale-in is skipped.
   * - `false`: Scale-in is performed.
   * 
   * @example
   * false
   */
  skipNodesWithLocalStorage?: boolean;
  /**
   * @remarks
   * Specifies whether cluster-autoscaler skips scale-in for nodes that run Pods in the kube-system namespace. This feature does not apply to DaemonSet Pods or Mirror Pods. Valid values:
   * - `true`: Scale-in is skipped.
   * - `false`: Scale-in is performed.
   * 
   * @example
   * true
   */
  skipNodesWithSystemPods?: boolean;
  /**
   * @remarks
   * The cool-down period. The time interval after the most recent scale-out event during which the elastic component does not perform scale-in operations. A node that is scaled out can be considered for scale-in only after the cool-down period elapses.
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
   * The scale-in threshold, which is the ratio of requested resources to total resources on a node.
   * 
   * A node can be scaled in only when this ratio falls below the configured threshold, meaning both the CPU and memory resources utilization of the node are below the scale-in threshold.
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

