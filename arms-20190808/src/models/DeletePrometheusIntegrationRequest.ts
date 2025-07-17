// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrometheusIntegrationRequest extends $dara.Model {
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
   * The ID of the exporter.
   * 
   * @example
   * 2875
   */
  instanceId?: number;
  /**
   * @remarks
   * The type of the integration.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka and mysql.
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

