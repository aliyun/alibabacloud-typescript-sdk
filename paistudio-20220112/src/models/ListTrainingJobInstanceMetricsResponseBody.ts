// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics extends $dara.Model {
  time?: string;
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
  instanceId?: string;
  metrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics[];
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
  instanceMetrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics[];
  /**
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

