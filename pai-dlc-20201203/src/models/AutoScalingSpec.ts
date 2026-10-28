// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoscalingMetricSpec } from "./AutoscalingMetricSpec";


export class AutoScalingSpec extends $dara.Model {
  /**
   * @remarks
   * The monitoring metrics configuration for autoscaling.
   */
  autoscalingMetricSpec?: AutoscalingMetricSpec;
  /**
   * @remarks
   * The maximum number of replicas.
   * 
   * @example
   * 10
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The minimum number of replicas.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The Pods to delete for scale-in. This can only be modified through UpdateJob, and the number of Pods to delete must match PodCount.
   */
  podsToDelete?: string[];
  /**
   * @remarks
   * The autoscaling policy. Valid values: Default, ScaleByAPI, RayAutoscaler, and CloudMonitorMetric.
   * 
   * @example
   * Default
   */
  scalingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoscalingMetricSpec: 'AutoscalingMetricSpec',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      podsToDelete: 'PodsToDelete',
      scalingStrategy: 'ScalingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoscalingMetricSpec: AutoscalingMetricSpec,
      maxReplicas: 'number',
      minReplicas: 'number',
      podsToDelete: { 'type': 'array', 'itemType': 'string' },
      scalingStrategy: 'string',
    };
  }

  validate() {
    if(this.autoscalingMetricSpec && typeof (this.autoscalingMetricSpec as any).validate === 'function') {
      (this.autoscalingMetricSpec as any).validate();
    }
    if(Array.isArray(this.podsToDelete)) {
      $dara.Model.validateArray(this.podsToDelete);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

