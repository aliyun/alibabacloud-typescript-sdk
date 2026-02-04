// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the instance. Unit: MB/s.
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
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The configurations of the instance.
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
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
   * The time when the subscription expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-18T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The GUID of the instance.
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
   * The state of the instance. The return value is Creating.
   * 
   * @example
   * Creating
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **CLASSIC**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **STAND_ALONE**: standalone
   * *   **MASTER_SLAVE**: master-replica
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * 2084452111111
   */
  orderId?: number;
  /**
   * @remarks
   * The port number that is used to connect to the instance.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 172.16.0.10
   */
  privateIpAddr?: string;
  /**
   * @remarks
   * The expected maximum queries per second (QPS).
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
   * The ID of the request.
   * 
   * @example
   * 5DEA3CC9-F81D-4387-8E97-CEA40F09****
   */
  requestId?: string;
  /**
   * @remarks
   * The username that is used to connect to the instance. By default, Tair (Redis OSS-compatible) provides a username that is named after the instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
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

