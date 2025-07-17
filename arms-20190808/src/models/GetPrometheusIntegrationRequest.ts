// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance. Valid values: aliyun-cs and ecs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the exporter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2893
   */
  instanceId?: number;
  /**
   * @remarks
   * The integration type. Valid values: kafka, mysql, redis, snmp, emr, nubela, and tidb.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka, mysql, redis, snmp, emr, nubela, and tidb
   */
  integrationType?: string;
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
      instanceId: 'InstanceId',
      integrationType: 'IntegrationType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'number',
      integrationType: 'string',
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

