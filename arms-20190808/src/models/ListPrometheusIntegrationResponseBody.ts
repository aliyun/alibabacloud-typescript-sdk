// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusIntegrationResponseBodyData extends $dara.Model {
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
   * Indicates whether the exporter can be edited.
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
   * The name of the container.
   * 
   * @example
   * container-1
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
   * kafka-exporter
   */
  exporterType?: string;
  /**
   * @remarks
   * The ID of the exporter.
   * 
   * @example
   * 29374
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the exporter.
   * 
   * @example
   * inet
   */
  instanceName?: string;
  /**
   * @remarks
   * The integration type. Valid values: kafka, mysql, redis, snmp, emr, nubela, and tidb.
   * 
   * @example
   * Kafka, mysql, redis, snmp, emr, nubela, and tidb
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
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The configurations of the exporter. The value is a JSON string.
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
   * The pod name of the exporter.
   * 
   * @example
   * kafka-exporter-1
   */
  podName?: string;
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
  showLog?: boolean;
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
   * 121.40.62.240:3342
   */
  target?: string;
  /**
   * @remarks
   * The version number.
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
      podName: 'PodName',
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
      podName: 'string',
      showDescribe: 'boolean',
      showLog: 'boolean',
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

export class ListPrometheusIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried exporters.
   */
  data?: ListPrometheusIntegrationResponseBodyData[];
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
   * 1F1D8840-5330-5804-A8DB-C3C5C5CED6BB
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
      data: { 'type': 'array', 'itemType': ListPrometheusIntegrationResponseBodyData },
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

