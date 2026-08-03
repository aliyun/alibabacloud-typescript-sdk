// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbTableResponseBody extends $dara.Model {
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
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The detailed configuration of the instance in JSON format. For more information about the parameters, see [Parameter settings](https://help.aliyun.com/document_detail/43885.html).
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
   * r-bp1zxszhcgatnx*
   */
  instanceId?: string;
  /**
   * @remarks
   * The current status of the instance. The value is fixed as Creating.
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
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The queries per second (QPS). This value is the theoretical maximum for the current instance specifications.
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
   * 2D9F3768-EDA9-4811-943E-42C8006E****
   */
  requestId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * apitest
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the task flow that is executed for the creation.
   * 
   * @example
   * 11111****
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
      instanceStatus: 'InstanceStatus',
      orderId: 'OrderId',
      port: 'Port',
      QPS: 'QPS',
      regionId: 'RegionId',
      requestId: 'RequestId',
      tableName: 'TableName',
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
      instanceStatus: 'string',
      orderId: 'number',
      port: 'number',
      QPS: 'number',
      regionId: 'string',
      requestId: 'string',
      tableName: 'string',
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

