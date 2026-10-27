// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint. This parameter is required when ROCKET_MQ_4 or ROCKET_MQ_5 is used.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * The list of subscribed events.
   */
  eventSubscriptionsShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The MQ instance ID. This parameter is required when ROCKET_MQ_5 is used.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The message push type.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password. This parameter is required when ROCKET_MQ_5 is used.
   * 
   * @example
   * pwd
   */
  password?: string;
  /**
   * @remarks
   * The producer ID. This parameter is required when ROCKET_MQ_4 is used.
   * 
   * @example
   * user1
   */
  producerId?: string;
  /**
   * @remarks
   * The queue topic. This parameter is required when ROCKET_MQ_4 or ROCKET_MQ_5 is used.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The username. This parameter is required when ROCKET_MQ_5 is used.
   * 
   * @example
   * username
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

