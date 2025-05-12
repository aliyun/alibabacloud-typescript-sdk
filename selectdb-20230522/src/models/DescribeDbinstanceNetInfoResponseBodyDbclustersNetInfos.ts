// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList } from "./DescribeDbinstanceNetInfoResponseBodyDbclustersNetInfosPortList";


export class DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-****-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection string of the BE cluster.
   * 
   * @example
   * selectdb-cn-****-fe.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 8.131.***.***
   */
  ip?: string;
  /**
   * @remarks
   * The network type of the BE cluster.
   * 
   * @example
   * VPC/PUBLIC
   */
  netType?: string;
  portList?: DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList[];
  /**
   * @remarks
   * Indicates whether the network information is visible to users.
   * 
   * @example
   * true/false
   */
  userVisible?: boolean;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * selectdb-cn-****-fe-20230816101006
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
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

