// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceAutoScalerRequestBehaviorOnZero extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the number of instances is reduced to 0. Default value: 600. The number of instances can be reduced to 0 only if no request is available or no traffic exists in the specified time window.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances that you want to create at a time if the number of instances is scaled out from 0. Default value: 1.
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

export class UpdateServiceAutoScalerRequestBehaviorScaleDown extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-in operation is performed. Default value: 300. The scale-in operation can be performed only if the specified metric drops below the threshold in the specified time window.
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

export class UpdateServiceAutoScalerRequestBehaviorScaleUp extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-out operation is performed. Default value: 0. The scale-out operation can be performed only if the specified metric exceeds the specified threshold in the specified time window.
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

export class UpdateServiceAutoScalerRequestBehavior extends $dara.Model {
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: UpdateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: UpdateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
  scaleUp?: UpdateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: UpdateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: UpdateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: UpdateServiceAutoScalerRequestBehaviorScaleUp,
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

export class UpdateServiceAutoScalerRequestScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The name of the metric for triggering auto scaling. Valid values:
   * 
   * *   qps: the queries per second (QPS) for an individual instance.
   * *   cpu: the CPU utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to QPS, scale-out is triggered when the average QPS for a single instance is greater than this threshold.
   * *   If you set metricName to CPU, scale-out is triggered when the average CPU utilization for a single instance is greater than this threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
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

export class UpdateServiceAutoScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: UpdateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances. The value must be greater than that of the min parameter.
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
   * The auto scaling policies.
   * 
   * This parameter is required.
   */
  scaleStrategies?: UpdateServiceAutoScalerRequestScaleStrategies[];
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
      behavior: UpdateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': UpdateServiceAutoScalerRequestScaleStrategies },
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

