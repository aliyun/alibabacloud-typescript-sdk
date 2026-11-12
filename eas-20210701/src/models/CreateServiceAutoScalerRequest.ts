// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceAutoScalerRequestBehaviorOnZero extends $dara.Model {
  /**
   * @remarks
   * The grace period before scaling in to zero. When the metrics meet the conditions for scaling in to zero, the scale-in to zero is executed after the grace period elapses. Default value: 600.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances created at a time when scaling out from zero. Default value: 1.
   * 
   * @example
   * 1
   */
  scaleUpActivationReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      scaleDownGracePeriodSeconds: 'scaleDownGracePeriodSeconds',
      scaleUpActivationReplicas: 'scaleUpActivationReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDownGracePeriodSeconds: 'number',
      scaleUpActivationReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorScaleDown extends $dara.Model {
  /**
   * @remarks
   * The stabilization window period for scale-in. Default value: 300. Scale-in is executed only when the metrics do not meet the specified conditions over the past period of time.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorScaleUp extends $dara.Model {
  /**
   * @remarks
   * The stabilization window period for scale-out. Default value: 0. Scale-out is executed only when the metrics meet the specified conditions over the past period of time.
   * 
   * @example
   * 0
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehavior extends $dara.Model {
  /**
   * @remarks
   * The behavior when scaling in to zero.
   */
  onZero?: CreateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The behavior during scale-in.
   */
  scaleDown?: CreateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The behavior during scale-out.
   */
  scaleUp?: CreateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: CreateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: CreateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: CreateServiceAutoScalerRequestBehaviorScaleUp,
    };
  }

  validate() {
    if(this.onZero && typeof (this.onZero as any).validate === 'function') {
      (this.onZero as any).validate();
    }
    if(this.scaleDown && typeof (this.scaleDown as any).validate === 'function') {
      (this.scaleDown as any).validate();
    }
    if(this.scaleUp && typeof (this.scaleUp as any).validate === 'function') {
      (this.scaleUp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The name of the metric. Valid values:
   * - qps: the queries per second (QPS) threshold per instance
   * - cpu: the CPU utilization threshold
   * - gpu[util]: the GPU utilization threshold
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service to which the metric belongs. If this parameter is not specified, the current service is used by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold that triggers auto-scaling.
   * - If the metric name is set to qps, scale-out is triggered when the average QPS per instance exceeds this value.
   * - If the metric name is set to cpu, scale-out is triggered when the average CPU utilization per instance exceeds this value.
   * - If the metric name is set to gpu[util], scale-out is triggered when the average GPU utilization per instance exceeds this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The behavior during auto-scaling.
   */
  behavior?: CreateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances. The value must be greater than the minimum number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The list of scaling policies.
   * 
   * This parameter is required.
   */
  scaleStrategies?: CreateServiceAutoScalerRequestScaleStrategies[];
  static names(): { [key: string]: string } {
    return {
      behavior: 'behavior',
      max: 'max',
      min: 'min',
      scaleStrategies: 'scaleStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: CreateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': CreateServiceAutoScalerRequestScaleStrategies },
    };
  }

  validate() {
    if(this.behavior && typeof (this.behavior as any).validate === 'function') {
      (this.behavior as any).validate();
    }
    if(Array.isArray(this.scaleStrategies)) {
      $dara.Model.validateArray(this.scaleStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

