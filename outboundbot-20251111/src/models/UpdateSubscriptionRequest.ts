// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * 接入点
   * 
   * @example
   * rmq-cn-h964u01wh12.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * 事件订阅列表
   */
  eventSubscriptions?: string[];
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * MQ的实例ID
   * 
   * @example
   * rmq-cn-3g84vpf3712
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * 消息队列类型
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * 田南+伽雷可斯
   * 
   * @example
   * pa44w0rd
   */
  password?: string;
  /**
   * @remarks
   * 生产者ID
   * 
   * @example
   * GID_123456
   */
  producerId?: string;
  /**
   * @remarks
   * 主题
   * 
   * @example
   * OUTBOUND_BOT_TOPIC
   */
  topic?: string;
  /**
   * @remarks
   * 伽雷可斯
   * 
   * @example
   * admin
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      eventSubscriptions: 'EventSubscriptions',
      instanceId: 'InstanceId',
      mqInstanceId: 'MqInstanceId',
      mqType: 'MqType',
      password: 'Password',
      producerId: 'ProducerId',
      topic: 'Topic',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      eventSubscriptions: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      mqInstanceId: 'string',
      mqType: 'string',
      password: 'string',
      producerId: 'string',
      topic: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventSubscriptions)) {
      $dara.Model.validateArray(this.eventSubscriptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

