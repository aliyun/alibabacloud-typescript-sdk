// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBClustersResponseBodyItemsTags extends $dara.Model {
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
   * testValueData
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

export class DescribeAgenticDBClustersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The Agentic cluster description.
   * 
   * @example
   * pagc-**************
   */
  agenticDbClusterDescription?: string;
  /**
   * @remarks
   * The Agentic cluster ID.
   * 
   * @example
   * pagc-**************
   */
  agenticDbClusterId?: string;
  /**
   * @remarks
   * The cluster edition. Valid values:
   * 
   * - **Normal**: Cluster Edition
   * 
   * - **Basic**: Single Node Edition
   * 
   * - **Archive**: X-Engine Edition
   * 
   * - **NormalMultimaster**: Multi-master Cluster (Database/Table)
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * ocpx
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * > A specific value is returned only for clusters whose billing method is **Prepaid** (subscription). An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
   * 
   * @example
   * 2025-06-25T09:37:10Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription).
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The lock status of the cluster. Valid values: 
   * 
   * - **Unlock**: Normal. 
   * - **ManualLock**: Manually locked. 
   * - **LockByExpiration**: Automatically locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The billing method. Valid values: 
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum value: 1 to 32 PCUs. Unit: PCU.
   * 
   * @example
   * 9
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum value: 0 to 32 PCUs. The minimum value must be less than or equal to the maximum value. Unit: PCU.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The serverless type. A value of **AgileServerless** indicates that the cluster is a serverless cluster.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * * **essdpl0**
   * * **essdpl1**
   * * **essdpl2**
   * * **essdpl3**
   * 
   * @example
   * city_redundancy
   */
  storageType?: string;
  /**
   * @remarks
   * The storage usage of the cluster. Unit: bytes.
   * 
   * @example
   * 3009413120
   */
  storageUsed?: number;
  /**
   * @remarks
   * The tag key. You can filter the cluster list by tag. You can specify up to 20 tag pairs. The number n for each tag pair must be unique and must be a consecutive integer starting from 1. The value of Tag.n.Key corresponds to Tag.n.Value.
   */
  tags?: DescribeAgenticDBClustersResponseBodyItemsTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the endpoint resides.
   * 
   * @example
   * vpc-****************
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-**************
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
      agenticDbClusterDescription: 'AgenticDbClusterDescription',
      agenticDbClusterId: 'AgenticDbClusterId',
      category: 'Category',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      lockMode: 'LockMode',
      payType: 'PayType',
      regionId: 'RegionId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      serverlessType: 'ServerlessType',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticDbClusterDescription: 'string',
      agenticDbClusterId: 'string',
      category: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBType: 'string',
      DBVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      lockMode: 'string',
      payType: 'string',
      regionId: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      serverlessType: 'string',
      storageType: 'string',
      storageUsed: 'number',
      tags: { 'type': 'array', 'itemType': DescribeAgenticDBClustersResponseBodyItemsTags },
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

export class DescribeAgenticDBClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster list.
   */
  items?: DescribeAgenticDBClustersResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call. If there is no next query, do not pass this parameter.
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
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of clusters on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
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
      items: { 'type': 'array', 'itemType': DescribeAgenticDBClustersResponseBodyItems },
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

