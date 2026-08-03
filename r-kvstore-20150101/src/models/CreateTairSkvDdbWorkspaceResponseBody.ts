// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit of the instance. Unit: MB/s.
   * 
   * @example
   * 96
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * * `PrePaid`: subscription.
   * * `PostPaid`: pay-as-you-go.
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
   * The internal endpoint of the Redis instance.
   * 
   * @example
   * r-bp1zxszhcgatnx**.redis.rds.aliyuncs.com
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
   * The globally unique instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx**
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
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
   * The order ID.
   * 
   * @example
   * 20741011111111
   */
  orderId?: number;
  /**
   * @remarks
   * The Redis service port.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The queries per second (QPS). This value is the theoretical value for the current instance specifications.
   * 
   * @example
   * 100000
   */
  QPS?: number;
  /**
   * @remarks
   * The region in which the instance resides.
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
   * The ID of the task flow that is executed for the creation.
   * 
   * @example
   * 1111
   */
  taskId?: string;
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
      chargeType: 'ChargeType',
      config: 'Config',
      connectionDomain: 'ConnectionDomain',
      connections: 'Connections',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      orderId: 'OrderId',
      port: 'Port',
      QPS: 'QPS',
      regionId: 'RegionId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      config: 'string',
      connectionDomain: 'string',
      connections: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      orderId: 'number',
      port: 'number',
      QPS: 'number',
      regionId: 'string',
      requestId: 'string',
      taskId: 'string',
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

