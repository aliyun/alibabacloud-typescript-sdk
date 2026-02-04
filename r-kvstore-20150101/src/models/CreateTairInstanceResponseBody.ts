// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the instance. Unit: Mbit/s.
   * 
   * @example
   * 96
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The detailed configurations of the instance. The value is a JSON string. For more information about the parameters, see [Configure parameters](https://help.aliyun.com/document_detail/43885.html).
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * r-bp13ac3d047b****.tairpena.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The maximum number of connections to the instance.
   * 
   * @example
   * 10000
   */
  connections?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp13ac3d047b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * >  This parameter is returned only if the **InstanceName** parameter is specified in the request.
   * 
   * @example
   * redistest
   */
  instanceName?: string;
  /**
   * @remarks
   * The current status of the instance. The value is **Creating**.
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
   * The service port number of the instance.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The maximum number of read and write operations that can be processed by the instance per second. The value is a theoretical value.
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
   * The zone ID.
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

