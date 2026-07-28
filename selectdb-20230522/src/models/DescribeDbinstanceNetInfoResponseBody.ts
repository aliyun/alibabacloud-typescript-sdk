// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList extends $dara.Model {
  /**
   * @remarks
   * Connection port number.
   * 
   * @example
   * 9030/8080
   */
  port?: number;
  /**
   * @remarks
   * Port type.
   * 
   * @example
   * MySQLPort/HttpPort
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * selectdb-cn-****-be
   */
  clusterId?: string;
  /**
   * @remarks
   * Connection address.
   * 
   * @example
   * selectdb-cn-****-fe.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 8.131.***.***
   */
  ip?: string;
  /**
   * @remarks
   * Network type.
   * 
   * @example
   * VPC/PUBLIC
   */
  netType?: string;
  /**
   * @remarks
   * Port list.
   */
  portList?: DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList[];
  /**
   * @remarks
   * Indicates whether the information is visible to users.
   * 
   * @example
   * true/false
   */
  userVisible?: boolean;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-****
   */
  vpcId?: string;
  /**
   * @remarks
   * VPC instance ID.
   * 
   * @example
   * selectdb-cn-****-fe-20230816101006
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionString: 'ConnectionString',
      ip: 'Ip',
      netType: 'NetType',
      portList: 'PortList',
      userVisible: 'UserVisible',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionString: 'string',
      ip: 'string',
      netType: 'string',
      portList: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList },
      userVisible: 'boolean',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList extends $dara.Model {
  /**
   * @remarks
   * Connection port number.
   * 
   * @example
   * MySQLPort
   */
  port?: number;
  /**
   * @remarks
   * Port type. Valid values:
   * 
   * - **HttpPort**: HTTP protocol port.
   * 
   * - **MySQLPort**: MySQL protocol port.
   * 
   * @example
   * 9030
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * selectdb-cn-****-be
   */
  clusterId?: string;
  /**
   * @remarks
   * Connection address.
   * 
   * @example
   * selectdb-cn-h033cnd****-fe.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * Network type of the instance. Valid values:
   * 
   * - **VPC**: Virtual Private Cloud (VPC).
   * 
   * - **PUBLIC**: Internet.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * Port object.
   */
  portList?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList[];
  /**
   * @remarks
   * Indicates whether the information is visible to users. Valid values:
   * 
   * - **true**: Visible to users.
   * 
   * - **false**: Not visible to users.
   * 
   * @example
   * true
   */
  userVisible?: boolean;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-wz90scxq6ods388ft****
   */
  vpcId?: string;
  /**
   * @remarks
   * VPC instance ID.
   * 
   * @example
   * selectdb-cn-h033cnd****-fe-20230816101006
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-uf6mlqti065rer6m0****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionString: 'ConnectionString',
      ip: 'Ip',
      netType: 'NetType',
      portList: 'PortList',
      userVisible: 'UserVisible',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionString: 'string',
      ip: 'string',
      netType: 'string',
      portList: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList },
      userVisible: 'boolean',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Network list of BE instances.
   */
  DBClustersNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos[];
  /**
   * @remarks
   * Instance network information.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ADF42B18-43FD-5100-83A9-BE81AB70C863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClustersNetInfos: 'DBClustersNetInfos',
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClustersNetInfos: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos },
      DBInstanceNetInfos: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBClustersNetInfos)) {
      $dara.Model.validateArray(this.DBClustersNetInfos);
    }
    if(Array.isArray(this.DBInstanceNetInfos)) {
      $dara.Model.validateArray(this.DBInstanceNetInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

