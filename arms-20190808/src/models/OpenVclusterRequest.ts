// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenVClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the cluster. For cloud services, set this parameter to `cloud-product-prometheus`.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud-product-prometheus
   */
  clusterType?: string;
  /**
   * @remarks
   * The length of the cluster ID. Default value: 10.
   * 
   * @example
   * 10
   */
  length?: number;
  /**
   * @remarks
   * The name of the cloud service. This parameter must be specified when ClusterType is set to `cloud-product-prometheus`. Valid values: influxdb, mongodb, and DLA. You cannot specify multiple service names.
   * 
   * @example
   * influxdb
   */
  product?: string;
  /**
   * @remarks
   * Specifies whether to create or query a virtual cluster. This parameter provides backward compatibility.
   * 
   * @example
   * false
   */
  recreateSwitch?: boolean;
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
      clusterType: 'ClusterType',
      length: 'Length',
      product: 'Product',
      recreateSwitch: 'RecreateSwitch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      length: 'number',
      product: 'string',
      recreateSwitch: 'boolean',
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

