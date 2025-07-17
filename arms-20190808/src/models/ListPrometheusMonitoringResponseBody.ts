// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusMonitoringResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * c589a1b8db05c4561aefbb898ca8fb1cf
   */
  clusterId?: string;
  /**
   * @remarks
   * The monitoring configuration. The value is a YAML string.
   * 
   * @example
   * apiVersion: monitoring.coreos.com/v1
   * kind: ServiceMonitor
   * metadata:
   *   name: tomcat-demo
   *   namespace: default
   * spec:
   *   endpoints:
   *     - interval: 30s
   *       path: /metrics
   *       port: tomcat-monitor
   *   namespaceSelector:
   *     any: true
   *   selector:
   *     matchLabels:
   *       app: tomcat
   */
  configYaml?: string;
  /**
   * @remarks
   * The name of the monitoring configuration.
   * 
   * @example
   * podMonitor1
   */
  monitoringName?: string;
  /**
   * @remarks
   * The status of the monitoring configuration.
   * 
   * @example
   * run
   */
  status?: string;
  /**
   * @remarks
   * The type of the monitoring configuration.
   * 
   * @example
   * podMonitor
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configYaml: 'ConfigYaml',
      monitoringName: 'MonitoringName',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      configYaml: 'string',
      monitoringName: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusMonitoringResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListPrometheusMonitoringResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D80ADAAC-8C32-5479-BD14-C28CF832****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListPrometheusMonitoringResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

