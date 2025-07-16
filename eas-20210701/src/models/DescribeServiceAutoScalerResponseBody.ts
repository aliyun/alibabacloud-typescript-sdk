// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceAutoScalerResponseBodyCurrentMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS
   * *   CPU
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBodyScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS: the queries per second (QPS) for an individual instance.
   * *   CPU: the CPU utilization.
   * 
   * @example
   * QPS
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

export class DescribeServiceAutoScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The additional information about the Autoscaler policy, such as the interval of triggering Autoscaler.
   * 
   * @example
   * {
   *   "behavior": {
   *     "scaleDown": {
   *       "stabilizationWindowSeconds": 150
   *     }
   *   }
   * }
   */
  behavior?: { [key: string]: any };
  /**
   * @remarks
   * The metrics.
   */
  currentMetrics?: DescribeServiceAutoScalerResponseBodyCurrentMetrics[];
  /**
   * @remarks
   * The maximum number of instances in the service.
   * 
   * @example
   * 8
   */
  maxReplica?: number;
  /**
   * @remarks
   * The minimum number of instances in the service.
   * 
   * @example
   * 3
   */
  minReplica?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The auto scaling policies.
   */
  scaleStrategies?: DescribeServiceAutoScalerResponseBodyScaleStrategies[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      behavior: 'Behavior',
      currentMetrics: 'CurrentMetrics',
      maxReplica: 'MaxReplica',
      minReplica: 'MinReplica',
      requestId: 'RequestId',
      scaleStrategies: 'ScaleStrategies',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      currentMetrics: { 'type': 'array', 'itemType': DescribeServiceAutoScalerResponseBodyCurrentMetrics },
      maxReplica: 'number',
      minReplica: 'number',
      requestId: 'string',
      scaleStrategies: { 'type': 'array', 'itemType': DescribeServiceAutoScalerResponseBodyScaleStrategies },
      serviceName: 'string',
    };
  }

  validate() {
    if(this.behavior) {
      $dara.Model.validateMap(this.behavior);
    }
    if(Array.isArray(this.currentMetrics)) {
      $dara.Model.validateArray(this.currentMetrics);
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

