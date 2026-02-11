// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardsRequest extends $dara.Model {
  clusterId?: string;
  clusterType?: string;
  product?: string;
  recreateSwitch?: boolean;
  regionId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      product: 'Product',
      recreateSwitch: 'RecreateSwitch',
      regionId: 'RegionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      product: 'string',
      recreateSwitch: 'boolean',
      regionId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

