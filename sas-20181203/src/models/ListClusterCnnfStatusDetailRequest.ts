// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterCnnfStatusDetailRequest extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the ID of the cluster.
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

