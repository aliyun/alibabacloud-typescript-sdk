// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPrometheusGrafanaInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Grafana workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * grafana-bp1*****
   */
  grafanaInstanceId?: string;
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
  /**
   * @remarks
   * The ID of the resource group to which the Prometheus instance belongs.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      grafanaInstanceId: 'GrafanaInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      grafanaInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

