// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem extends $dara.Model {
  connectionString?: string;
  httpPort?: string;
  httpsPort?: string;
  IPAddress?: string;
  jdbcPort?: string;
  mySQLPort?: string;
  netType?: string;
  vSwitchId?: string;
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

