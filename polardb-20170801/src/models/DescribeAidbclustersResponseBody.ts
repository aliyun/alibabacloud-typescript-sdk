// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeAIDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
  tag?: DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag },
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

export class DescribeAIDBClustersResponseBodyItemsDBCluster extends $dara.Model {
  /**
   * @example
   * vnode
   */
  aiNodeType?: string;
  /**
   * @example
   * 2021-09-13T15:45:27Z
   */
  createTime?: string;
  /**
   * @example
   * ocpx
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * Creating
   */
  DBClusterStatus?: string;
  /**
   * @example
   * polar.pg.g8.8xlarge.gu30
   */
  DBNodeClass?: string;
  /**
   * @example
   * polardb_ai
   */
  DBType?: string;
  /**
   * @example
   * 2028-09-01T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @example
   * xxxxxxxxxxxx
   */
  kubeClusterId?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * pc-**************
   */
  relativeDBClusterId?: string;
  /**
   * @example
   * container
   */
  runType?: string;
  /**
   * @example
   * 10
   */
  storageSpace?: number;
  /**
   * @example
   * essdpl0
   */
  storageType?: string;
  tags?: DescribeAIDBClustersResponseBodyItemsDBClusterTags;
  /**
   * @example
   * vpc-***************
   */
  vpcId?: string;
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aiNodeType: 'AiNodeType',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      kubeClusterId: 'KubeClusterId',
      lockMode: 'LockMode',
      payType: 'PayType',
      regionId: 'RegionId',
      relativeDBClusterId: 'RelativeDBClusterId',
      runType: 'RunType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodeType: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBType: 'string',
      expireTime: 'string',
      expired: 'boolean',
      kubeClusterId: 'string',
      lockMode: 'string',
      payType: 'string',
      regionId: 'string',
      relativeDBClusterId: 'string',
      runType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      tags: DescribeAIDBClustersResponseBodyItemsDBClusterTags,
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClustersResponseBodyItems extends $dara.Model {
  DBCluster?: DescribeAIDBClustersResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeAIDBClustersResponseBodyItemsDBCluster },
    };
  }

  validate() {
    if(Array.isArray(this.DBCluster)) {
      $dara.Model.validateArray(this.DBCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClustersResponseBody extends $dara.Model {
  items?: DescribeAIDBClustersResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 7
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9D6CE7C6-1C52-5BF6-B3D7-10977D44542C
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeAIDBClustersResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

