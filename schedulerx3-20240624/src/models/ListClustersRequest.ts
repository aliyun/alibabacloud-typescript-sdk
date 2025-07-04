// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersRequestTag } from "./ListClustersRequestTag";


export class ListClustersRequest extends $dara.Model {
  /**
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @example
   * cluster-test
   */
  clusterName?: string;
  /**
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  tag?: ListClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': ListClustersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

