// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenVClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterType?: string;
  length?: number;
  product?: string;
  recreateSwitch?: boolean;
  /**
   * @remarks
   * This parameter is required.
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

