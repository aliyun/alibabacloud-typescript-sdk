// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 96
   */
  bandwidth?: number;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @example
   * r-bp1zxszhcgatnx**.redis.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @example
   * 10000
   */
  connections?: number;
  /**
   * @example
   * r-bp1zxszhcgatnx**
   */
  instanceId?: string;
  /**
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @example
   * Creating
   */
  instanceStatus?: string;
  /**
   * @example
   * 20741011111111
   */
  orderId?: number;
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * 100000
   */
  QPS?: number;
  /**
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @example
   * 5DEA3CC9-F81D-4387-8E97-CEA40F09****
   */
  requestId?: string;
  /**
   * @example
   * 1111
   */
  taskId?: string;
  /**
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

