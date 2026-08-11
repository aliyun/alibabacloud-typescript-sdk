// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * rmq-cn-h964u01wh12.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * The list of subscription items.
   */
  eventSubscriptionsShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID of the message queue.
   * 
   * @example
   * rmq-cn-3g84vpf3712
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The MSMQ type.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * pa44w0rd
   */
  password?: string;
  /**
   * @remarks
   * The producer ID.
   * 
   * @example
   * GID_123456
   */
  producerId?: string;
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * OUTBOUND_BOT_TOPIC
   */
  topic?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      eventSubscriptionsShrink: 'EventSubscriptions',
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
      eventSubscriptionsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

