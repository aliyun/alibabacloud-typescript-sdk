// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersZonalResponseBodyItemsTags extends $dara.Model {
  /**
   * @example
   * MySQL
   */
  key?: string;
  /**
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
   * @example
   * SearchNode
   */
  aiType?: string;
  /**
   * @example
   * Normal
   */
  category?: string;
  /**
   * @example
   * cn-beijing
   */
  centralControlRegionId?: string;
  /**
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @example
   * GDN-1
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @example
   * polar.mysql.g1.tiny.c
   */
  DBNodeClass?: string;
  /**
   * @example
   * 2
   */
  DBNodeNumber?: number;
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @example
   * sg-singapore-9
   */
  ENSRegionId?: string;
  /**
   * @example
   * 2022-09-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @example
   * 10
   */
  storageSpace?: number;
  /**
   * @example
   * essdautopl
   */
  storageType?: string;
  /**
   * @example
   * 3009413120
   */
  storageUsed?: number;
  /**
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @example
   * Exclusive
   */
  subCategory?: string;
  tags?: DescribeDBClustersZonalResponseBodyItemsTags[];
  /**
   * @example
   * vpc-****************
   */
  vpcId?: string;
  /**
   * @example
   * vsw-***************
   */
  vswitchId?: string;
  /**
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
  items?: DescribeDBClustersZonalResponseBodyItems[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageRecordCount?: number;
  /**
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  /**
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

