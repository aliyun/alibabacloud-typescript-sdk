// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaPluginStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * This parameter is required.
   */
  clusterIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

