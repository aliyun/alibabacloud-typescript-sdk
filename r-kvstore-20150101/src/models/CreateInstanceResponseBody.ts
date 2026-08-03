// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit of the instance. Unit: MB/s.
   * 
   * @example
   * 32
   */
  bandwidth?: number;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB.
   * 
   * @example
   * 16384
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: subscription.
   * * **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The detailed configuration of the instance.
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The internal network endpoint of the Redis instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The maximum number of connections supported by the instance.
   * 
   * @example
   * 10000
   */
  connections?: number;
  /**
   * @remarks
   * The time when the subscription instance expires. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2019-01-18T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID, which is globally unique.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The current status of the instance. The return value is fixed as Creating.
   * 
   * @example
   * Creating
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * * **CLASSIC**: classic network.
   * * **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **STAND_ALONE**: single replica.
   * * **MASTER_SLAVE**: dual-replica.
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2084452111111
   */
  orderId?: number;
  /**
   * @remarks
   * The Redis service port.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The internal IP address of the instance.
   * 
   * @example
   * 172.16.0.10
   */
  privateIpAddr?: string;
  /**
   * @remarks
   * The queries per second (QPS). This value is the theoretical maximum for the current instance type.
   * 
   * @example
   * 100000
   */
  QPS?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DEA3CC9-F81D-4387-8E97-CEA40F09****
   */
  requestId?: string;
  /**
   * @remarks
   * The account used to connect to the Redis instance. By default, an account named after the instance ID is included.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  userName?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      config: 'Config',
      connectionDomain: 'ConnectionDomain',
      connections: 'Connections',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      orderId: 'OrderId',
      port: 'Port',
      privateIpAddr: 'PrivateIpAddr',
      QPS: 'QPS',
      regionId: 'RegionId',
      requestId: 'RequestId',
      userName: 'UserName',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      config: 'string',
      connectionDomain: 'string',
      connections: 'number',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      networkType: 'string',
      nodeType: 'string',
      orderId: 'number',
      port: 'number',
      privateIpAddr: 'string',
      QPS: 'number',
      regionId: 'string',
      requestId: 'string',
      userName: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

