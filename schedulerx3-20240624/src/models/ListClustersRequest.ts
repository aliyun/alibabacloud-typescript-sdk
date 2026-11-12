// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cluster-test
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * 1
   */
  clusterType?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of tags used to filter clusters.
   */
  tag?: ListClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'number',
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

