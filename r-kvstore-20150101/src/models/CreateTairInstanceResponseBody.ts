// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth in MB/s.
   * 
   * @example
   * 96
   */
  bandwidth?: number;
  /**
   * @remarks
   * The charge type. Valid values:
   * 
   * - **PrePaid**: prepaid.
   * 
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The detailed configuration of the instance, returned as a JSON string. For parameter details, see [Configuration parameters](https://help.aliyun.com/document_detail/43885.html).
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The internal connection address.
   * 
   * @example
   * r-bp13ac3d047b****.tairpena.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 10000
   */
  connections?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp13ac3d047b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * > This parameter is returned only when the **InstanceName** parameter is specified in the request.
   * 
   * @example
   * redistest
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status. The value is always **Creating**.
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
   * 2084452111111
   */
  orderId?: number;
  /**
   * @remarks
   * The instance port.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The theoretical maximum number of read and write operations per second (QPS) for the instance.
   * 
   * @example
   * 100000
   */
  QPS?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12123216-4B00-4378-BE4B-08005BFC****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10****
   */
  taskId?: string;
  /**
   * @remarks
   * The availability zone ID.
   * 
   * @example
   * cn-hangzhou-h
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

