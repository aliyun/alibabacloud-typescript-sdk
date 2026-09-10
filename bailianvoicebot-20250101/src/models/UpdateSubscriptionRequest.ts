// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Model Studio business space.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The endpoint. This parameter is required if `MqType` is set to `ROCKET_MQ_4` or `ROCKET_MQ_5`.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpoint?: string;
  /**
   * @remarks
   * A list of events to subscribe to.
   */
  eventSubscriptions?: string[];
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance. This parameter is required if `MqType` is set to `ROCKET_MQ_5`.
   * 
   * @example
   * rmq-cn-l4p89zajz67.cn
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The type of the message queue service. Valid values are `ROCKET_MQ_4` and `ROCKET_MQ_5`, which correspond to ApsaraMQ for RocketMQ.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password for authentication. This parameter is required if `MqType` is set to `ROCKET_MQ_5`.
   * 
   * @example
   * pwd
   */
  password?: string;
  /**
   * @remarks
   * The ID of the producer. This parameter is required if `MqType` is set to `ROCKET_MQ_4`.
   * 
   * @example
   * user1
   */
  producerId?: string;
  /**
   * @remarks
   * The topic of the queue. This parameter is required if `MqType` is set to `ROCKET_MQ_4` or `ROCKET_MQ_5`.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The username for authentication. This parameter is required if `MqType` is set to `ROCKET_MQ_5`.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      endpoint: 'Endpoint',
      eventSubscriptions: 'EventSubscriptions',
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
      businessUnitId: 'string',
      endpoint: 'string',
      eventSubscriptions: { 'type': 'array', 'itemType': 'string' },
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

