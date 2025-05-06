// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDatabaseNetworkResponseBodyConnections } from "./DescribeGlobalDatabaseNetworkResponseBodyConnections";
import { DescribeGlobalDatabaseNetworkResponseBodyDBClusters } from "./DescribeGlobalDatabaseNetworkResponseBodyDbclusters";


export class DescribeGlobalDatabaseNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the connection to the cluster.
   */
  connections?: DescribeGlobalDatabaseNetworkResponseBodyConnections[];
  /**
   * @remarks
   * The time at which the GDN was created.
   * 
   * @example
   * 2020-02-24T11:57:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The clusters in the GDN.
   */
  DBClusters?: DescribeGlobalDatabaseNetworkResponseBodyDBClusters[];
  /**
   * @remarks
   * The type of the database engine. Only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. Only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * *   It cannot start with `http://` or `https://`.
   * *   It must start with a letter.
   * *   It can contain letters, digits, underscores (_), and hyphens (-).
   * *   It must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The ID of the GDN.
   * 
   * @example
   * gdn-bp1fttxsrmv*****
   */
  GDNId?: string;
  /**
   * @remarks
   * The status of the GDN. Valid values:
   * 
   * *   **Creating**: The GDN is being created.
   * *   **active**: The GDN is running.
   * *   **deleting**: The GDN is being deleted.
   * *   **locked**: The GDN is locked. If the GDN is locked, you cannot perform operations on clusters in the GDN.
   * *   **removing_member**: The secondary cluster is being removed from the GDN.
   * 
   * @example
   * active
   */
  GDNStatus?: string;
  /**
   * @remarks
   * The global domain name.
   * 
   * @example
   * [gdnid].gdn.rds.aliyuncs.com
   */
  globalDomainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 67F2E75F-AE67-4FB2-821F-A81237EACD15
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      GDNStatus: 'GDNStatus',
      globalDomainName: 'GlobalDomainName',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyConnections },
      createTime: 'string',
      DBClusterId: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClusters },
      DBType: 'string',
      DBVersion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      GDNStatus: 'string',
      globalDomainName: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    if(Array.isArray(this.DBClusters)) {
      $dara.Model.validateArray(this.DBClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

