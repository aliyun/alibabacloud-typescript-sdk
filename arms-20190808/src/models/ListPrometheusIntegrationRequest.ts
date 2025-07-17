// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance. Only aliyun-cs and ecs instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * c77f6f2397ea74672872acf5e31374a27
   */
  clusterId?: string;
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
      integrationType: 'IntegrationType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

