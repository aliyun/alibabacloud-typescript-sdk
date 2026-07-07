// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the clusters to query. Valid values of N: 0 to 20.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * The names of the clusters to query. Valid values of N: 0 to 20.
   */
  clusterNames?: string[];
  /**
   * @remarks
   * The page number of the list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings the number of rows per page for paging. Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      clusterNames: 'ClusterNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      clusterNames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    if(Array.isArray(this.clusterNames)) {
      $dara.Model.validateArray(this.clusterNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

