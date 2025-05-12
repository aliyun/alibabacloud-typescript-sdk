// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfosPortList";


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $dara.Model {
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
   * The connection string of the instance.
   * 
   * @example
   * selectdb-cn-h033cnd****-fe.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: indicates a virtual private cloud (VPC)-connected instance.
   * *   **PUBLIC**: indicates an Internet-connected instance.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The ports.
   */
  portList?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList[];
  /**
   * @remarks
   * Indicates whether the network information is visible to users. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  userVisible?: boolean;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz90scxq6ods388ft****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance.
   * 
   * @example
   * selectdb-cn-h033cnd****-fe-20230816101006
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
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

