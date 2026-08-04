// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics extends $dara.Model {
  /**
   * @remarks
   * UTC time in ISO 8601 format.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  time?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
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

export class ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * trainkxen7qjyg6y-master-0
   */
  instanceId?: string;
  /**
   * @remarks
   * List of instance monitoring metrics.
   */
  metrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics[];
  /**
   * @remarks
   * Node name.
   * 
   * @example
   * trains930928remn-master-0
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metrics: 'Metrics',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metrics: { 'type': 'array', 'itemType': ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics },
      nodeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of all monitoring metrics that match the filter condition.
   */
  instanceMetrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceMetrics: 'InstanceMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMetrics: { 'type': 'array', 'itemType': ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceMetrics)) {
      $dara.Model.validateArray(this.instanceMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

