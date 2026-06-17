// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersZonalResponseBodyItemsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * MySQL
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 5.6
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

export class DescribeDBClustersZonalResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The AI node type. Valid values:
   * 
   * - SearchNode: search node
   * 
   * - DLNode: AI node
   * 
   * @example
   * SearchNode
   */
  aiType?: string;
  /**
   * @remarks
   * The Cluster Edition. The following editions are supported:
   * 
   * - Normal: Cluster Edition
   * 
   * - Basic: single node
   * 
   * - Archive: X-Engine
   * 
   * - NormalMultimaster: Multi-master Cluster (Database/Table)
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The ID of the central control region.
   * 
   * @example
   * cn-beijing
   */
  centralControlRegionId?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * GDN-1
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the cluster.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * polar.mysql.g1.tiny.c
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  DBNodeNumber?: number;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database version.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The ENS region ID.
   * 
   * @example
   * sg-singapore-9
   */
  ENSRegionId?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > This parameter is returned only for **Prepaid** (subscription) clusters. For **Postpaid** (pay-as-you-go) clusters, this parameter is empty.
   * 
   * @example
   * 2022-09-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The lock state of the cluster. Valid values:
   * 
   * - Unlock: Normal.
   * 
   * - ManualLock: The cluster is manually locked.
   * 
   * - LockByExpiration: The cluster is automatically locked upon expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - Postpaid: pay-as-you-go.
   * 
   * - Prepaid: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The Serverless type. \\`**AgileServerless**\\` indicates that the cluster is a Serverless cluster. An empty value indicates that the cluster is a common cluster.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 10
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage class of the Standard Edition cluster. Valid values:
   * 
   * - essdpl0
   * 
   * - essdpl1
   * 
   * - essdpl2
   * 
   * - essdpl3
   * 
   * - essdautopl
   * 
   * @example
   * essdautopl
   */
  storageType?: string;
  /**
   * @remarks
   * The used storage space of the cluster. Unit: bytes.
   * 
   * @example
   * 3009413120
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether strong consistency is enabled for data across multiple zones. Valid values:
   * 
   * - **ON**: Strong consistency is enabled. This applies to Standard Edition clusters that are deployed in three zones.
   * 
   * - **OFF**: Strong consistency is not enabled.
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * The specification type of the compute node. Valid values:
   * 
   * - **Exclusive**: Dedicated
   * 
   * - **General**: General-purpose
   * 
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeDBClustersZonalResponseBodyItemsTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-****************
   */
  vpcId?: string;
  /**
   * @remarks
   * The virtual switch ID.
   * 
   * @example
   * vsw-***************
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aiType: 'AiType',
      category: 'Category',
      centralControlRegionId: 'CentralControlRegionId',
      cloudProvider: 'CloudProvider',
      cpuCores: 'CpuCores',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodeNumber: 'DBNodeNumber',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ENSRegionId: 'ENSRegionId',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      lockMode: 'LockMode',
      payType: 'PayType',
      serverlessType: 'ServerlessType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      strictConsistency: 'StrictConsistency',
      subCategory: 'SubCategory',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiType: 'string',
      category: 'string',
      centralControlRegionId: 'string',
      cloudProvider: 'string',
      cpuCores: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodeNumber: 'number',
      DBType: 'string',
      DBVersion: 'string',
      ENSRegionId: 'string',
      expireTime: 'string',
      expired: 'string',
      lockMode: 'string',
      payType: 'string',
      serverlessType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUsed: 'number',
      strictConsistency: 'string',
      subCategory: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBClustersZonalResponseBodyItemsTags },
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersZonalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  items?: DescribeDBClustersZonalResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If more results are available, this parameter is returned. To retrieve the next page, include this token in your next request. If all results have been returned, this parameter is not returned.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of clusters on the current page.
   * 
   * @example
   * 5
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 16
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClustersZonalResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

