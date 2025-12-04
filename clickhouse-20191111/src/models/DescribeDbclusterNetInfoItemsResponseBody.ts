// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * cc-bp1554t789i8e****.clickhouse.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The HTTP port number.
   * 
   * @example
   * 8123
   */
  httpPort?: string;
  /**
   * @remarks
   * The HTTPS port number.
   * 
   * @example
   * 8443
   */
  httpsPort?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.255.234.251
   */
  IPAddress?: string;
  /**
   * @remarks
   * The port number that is used in Java Database Connectivity (JDBC).
   * 
   * @example
   * 3306
   */
  jdbcPort?: string;
  /**
   * @remarks
   * The port of the MySQL instance.
   * 
   * @example
   * 9004
   */
  mySQLPort?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   Public: public endpoint
   * *   VPC: VPC
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  If the value of the NetType parameter is set to Public, an empty string is returned.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * >  If the value of the NetType parameter is set to Public, an empty string is returned.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      IPAddress: 'IPAddress',
      jdbcPort: 'JdbcPort',
      mySQLPort: 'MySQLPort',
      netType: 'NetType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      httpPort: 'string',
      httpsPort: 'string',
      IPAddress: 'string',
      jdbcPort: 'string',
      mySQLPort: 'string',
      netType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems extends $dara.Model {
  netInfoItem?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem[];
  static names(): { [key: string]: string } {
    return {
      netInfoItem: 'NetInfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItem: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoItem)) {
      $dara.Model.validateArray(this.netInfoItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * Indicates whether Server Load Balancer (SLB) is activated in the VPC. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSLB?: boolean;
  /**
   * @remarks
   * The network information about the cluster.
   */
  netInfoItems?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      enableSLB: 'EnableSLB',
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      enableSLB: 'boolean',
      netInfoItems: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.netInfoItems && typeof (this.netInfoItems as any).validate === 'function') {
      (this.netInfoItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

