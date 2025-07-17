// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReleaseMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order.
   * 
   * This parameter is required.
   * 
   * @example
   * a341a2f2-ed07-4257-aae9-dfb1be******
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The time when the change order was created.
   * 
   * @example
   * 1634005438000
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the metric that you want to query.
   * 
   * @example
   * SystemContrast
   */
  metricType?: string;
  /**
   * @remarks
   * The ID of the Enterprise Distributed Application Service (EDAS) or Kubernetes application.
   * 
   * This parameter is required.
   * 
   * @example
   * 8b46d03f-5947-449d-90fd-3a96c2******
   */
  pid?: string;
  /**
   * @remarks
   * This parameter is not in use.
   * 
   * @example
   * null
   */
  proxyUserId?: string;
  /**
   * @remarks
   * The end time of the version release.
   * 
   * This parameter is required.
   * 
   * @example
   * 1632798718632
   */
  releaseEndTime?: number;
  /**
   * @remarks
   * The start time of the version release.
   * 
   * This parameter is required.
   * 
   * @example
   * 1632798686692
   */
  releaseStartTime?: number;
  /**
   * @remarks
   * The service that you want to query.
   * 
   * @example
   * clothservice
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      createTime: 'CreateTime',
      metricType: 'MetricType',
      pid: 'Pid',
      proxyUserId: 'ProxyUserId',
      releaseEndTime: 'ReleaseEndTime',
      releaseStartTime: 'ReleaseStartTime',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      createTime: 'number',
      metricType: 'string',
      pid: 'string',
      proxyUserId: 'string',
      releaseEndTime: 'number',
      releaseStartTime: 'number',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

