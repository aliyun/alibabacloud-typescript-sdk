// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServiceAutoScalerResponseBodyCurrentMetrics } from "./DescribeServiceAutoScalerResponseBodyCurrentMetrics";
import { DescribeServiceAutoScalerResponseBodyScaleStrategies } from "./DescribeServiceAutoScalerResponseBodyScaleStrategies";


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

