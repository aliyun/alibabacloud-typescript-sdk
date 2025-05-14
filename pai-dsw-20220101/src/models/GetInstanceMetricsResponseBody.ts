// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceMetricsResponseBodyPodMetrics } from "./GetInstanceMetricsResponseBodyPodMetrics";


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

