// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FreeResourceClusterControlItem extends $dara.Model {
  clusterID?: string;
  clusterName?: string;
  crossClusters?: boolean;
  enableFreeResource?: boolean;
  /**
   * @example
   * frcc-whateversth
   */
  freeResourceClusterControlId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  regionID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'ClusterID',
      clusterName: 'ClusterName',
      crossClusters: 'CrossClusters',
      enableFreeResource: 'EnableFreeResource',
      freeResourceClusterControlId: 'FreeResourceClusterControlId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      regionID: 'RegionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      clusterName: 'string',
      crossClusters: 'boolean',
      enableFreeResource: 'boolean',
      freeResourceClusterControlId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      regionID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

