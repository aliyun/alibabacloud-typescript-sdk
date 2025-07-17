// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusMonitoringResponseBodyData extends $dara.Model {
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
   * customJob1
   */
  monitoringName?: string;
  /**
   * @remarks
   * The status of the monitoring configuration. Valid values: run and stop.
   * 
   * @example
   * run
   */
  status?: string;
  /**
   * @remarks
   * The type of the monitoring configuration. Valid values: serviceMonitor, podMonitor, customJob, and probe.
   * 
   * @example
   * serviceMonitor
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

export class GetPrometheusMonitoringResponseBody extends $dara.Model {
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
  data?: GetPrometheusMonitoringResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
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
      data: GetPrometheusMonitoringResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

