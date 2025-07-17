// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance. Only a Prometheus instance for Container Service or a Prometheus instance for ECS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the integration.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka, mysql, redis, snmp, emr, nubela, and tidb
   */
  integrationType?: string;
  /**
   * @remarks
   * The configurations of the exporter. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"port":"5554","name":"kafka-test12","kafka_instance":"kafka-test","__label_value":"kafka-test","scrape_interval":33,"metrics_path":"/metrics","__label_key":"kafka-test"}
   */
  param?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      integrationType: 'IntegrationType',
      param: 'Param',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      integrationType: 'string',
      param: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

