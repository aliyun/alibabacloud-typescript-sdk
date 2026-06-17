// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters extends $dara.Model {
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The role of the cluster. Valid values:
   * 
   * - **primary**: The primary cluster.
   * 
   * - **standby**: The standby cluster.
   * 
   * > A GDN consists of one primary cluster and up to four standby clusters. For more information, see [Global Database Network](https://help.aliyun.com/document_detail/160381.html).
   * 
   * @example
   * primary
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBodyItemsLabels extends $dara.Model {
  /**
   * @remarks
   * The GDN version.
   * 
   * @example
   * 2.0
   */
  GDNVersion?: string;
  static names(): { [key: string]: string } {
    return {
      GDNVersion: 'GDNVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time at which the GDN was created, in UTC. The format is `YYYY-MM-DDTHH:mm:ssZ`.
   * 
   * @example
   * 2020-03-23T05:46:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * A list of clusters in the GDN.
   */
  DBClusters?: DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters[];
  /**
   * @remarks
   * The database engine type. Only **MySQL** is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version. Only version **8.0** is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The GDN description. Requirements:
   * 
   * - Cannot start with http\\:// or https\\://.
   * 
   * - Must start with a letter or a Chinese character.
   * 
   * - Can contain letters, Chinese characters, digits, underscores (_), or hyphens (-).
   * 
   * - Must be 2 to 126 characters long.
   * 
   * @example
   * test
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The GDN ID.
   * 
   * @example
   * gdn-****************
   */
  GDNId?: string;
  /**
   * @remarks
   * The status of the GDN. Valid values:
   * 
   * - **creating**: The GDN is being created.
   * 
   * - **active**: The GDN is running.
   * 
   * - **deleting**: The GDN is being deleted.
   * 
   * - **locked**: The GDN is locked. This status prevents any operations on clusters in the GDN.
   * 
   * - **removing_member**: A standby cluster is being removed from the GDN.
   * 
   * @example
   * active
   */
  GDNStatus?: string;
  /**
   * @remarks
   * The tags applied to the GDN.
   */
  labels?: DescribeGlobalDatabaseNetworksResponseBodyItemsLabels;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      GDNStatus: 'GDNStatus',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters },
      DBType: 'string',
      DBVersion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      GDNStatus: 'string',
      labels: DescribeGlobalDatabaseNetworksResponseBodyItemsLabels,
    };
  }

  validate() {
    if(Array.isArray(this.DBClusters)) {
      $dara.Model.validateArray(this.DBClusters);
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of GDNs.
   */
  items?: DescribeGlobalDatabaseNetworksResponseBodyItems[];
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
   * The number of records on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A85BAF-1089-4CDF-A82F-0A140F******
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
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItems },
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

