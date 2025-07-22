// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceMetricsResponseBodyPodMetricsMetrics extends $dara.Model {
  /**
   * @remarks
   * The timestamp corresponding to the metric.
   * 
   * @example
   * 1670890560
   */
  time?: number;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 25.901031
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
      time: 'number',
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

export class GetInstanceMetricsResponseBodyPodMetrics extends $dara.Model {
  /**
   * @remarks
   * The metrics of the pod that corresponds to the instance.
   */
  metrics?: GetInstanceMetricsResponseBodyPodMetricsMetrics[];
  /**
   * @remarks
   * The ID of the pod that corresponds to the instance.
   * 
   * @example
   * dsw-15870-695f44c5bc-hd6xm
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetricsMetrics },
      podId: 'string',
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

export class GetInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The information about the metrics of the pod that corresponds to the instance.
   */
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      podMetrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetrics },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.podMetrics)) {
      $dara.Model.validateArray(this.podMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

