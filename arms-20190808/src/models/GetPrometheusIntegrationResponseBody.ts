// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusIntegrationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the exporter can be deleted.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the exporter can be modified.
   * 
   * @example
   * true
   */
  canEditor?: boolean;
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
   * The container name.
   * 
   * @example
   * kafka-exporter-1
   */
  containerName?: string;
  /**
   * @remarks
   * The description of the exporter.
   * 
   * @example
   * "{}"
   */
  describe?: string;
  /**
   * @remarks
   * The type of the exporter.
   * 
   * @example
   * tidb-exporter
   */
  exporterType?: string;
  /**
   * @remarks
   * The ID of the exporter.
   * 
   * @example
   * 2893
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the exporter.
   * 
   * @example
   * lpd-skyeye
   */
  instanceName?: string;
  /**
   * @remarks
   * The integration type. Valid values: kafka, mysql, redis, snmp, emr, nubela, and tidb.
   * 
   * @example
   * tidb
   */
  integrationType?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * Indicates whether an upgrade is required.
   * 
   * @example
   * True
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The parameters of the exporter. Format: JSON string.
   * 
   * @example
   * {
   *       "port": "5554",
   *       "name": "kafka-test12",
   *       "kafka_instance": "kafka-test",
   *       "__label_value": "kafka-test",
   *       "scrape_interval": 33,
   *       "metrics_path": "/metrics",
   *       "__label_key": "kafka-test"
   * }
   */
  param?: string;
  /**
   * @remarks
   * Indicates whether the description is displayed.
   * 
   * @example
   * true
   */
  showDescribe?: boolean;
  /**
   * @remarks
   * Indicates whether the exporter logs are displayed.
   * 
   * @example
   * true
   */
  showLog?: string;
  /**
   * @remarks
   * The status of the exporter.
   * 
   * @example
   * installed
   */
  status?: string;
  /**
   * @remarks
   * The monitored IP address.
   * 
   * @example
   * 127.0.0.1:3422
   */
  target?: string;
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      canEditor: 'CanEditor',
      clusterId: 'ClusterId',
      containerName: 'ContainerName',
      describe: 'Describe',
      exporterType: 'ExporterType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      integrationType: 'IntegrationType',
      namespace: 'Namespace',
      needUpgrade: 'NeedUpgrade',
      param: 'Param',
      showDescribe: 'ShowDescribe',
      showLog: 'ShowLog',
      status: 'Status',
      target: 'Target',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      canEditor: 'boolean',
      clusterId: 'string',
      containerName: 'string',
      describe: 'string',
      exporterType: 'string',
      instanceId: 'number',
      instanceName: 'string',
      integrationType: 'string',
      namespace: 'string',
      needUpgrade: 'boolean',
      param: 'string',
      showDescribe: 'boolean',
      showLog: 'string',
      status: 'string',
      target: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. If another status code is returned, the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: GetPrometheusIntegrationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9BEF2832-9D95-5E3E-9B10-74887CA17B94
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
      data: GetPrometheusIntegrationResponseBodyData,
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

